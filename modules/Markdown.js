/**
 * Markdown utilities for loading content, rendering HTML, and building a table of contents.
 * @module Markdown
 */

import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
import { $, $$ } from './utils.js'

/** Matches headers with section numbers (e.g., "## 1. Title", "### 2.1 Title"). */
const HEADER_REGEX = /^(#{1,6})\s+(\d+(?:\.\d+)*\.?)\s+(.+)$/;

/**
 * Utilities for loading markdown, rendering HTML, and building a table of contents.
 */
export class Markdown {
  /**
   * Transforms markdown into HTML.
   * @param {string} md - Markdown text to transform.
   * @returns {string} Rendered HTML.
   */
  static transformContentToHtml(md) {
    return marked.parse(md);
  }

  /**
   * Builds a table-of-contents index from numbered markdown headers.
   * Only includes headers that start with section numbers (e.g., "## 1. Title", "### 2.1 Subtitle").
   * @param {string} md - markdown text to transform
   * @returns {{ html: string, index: { level, sectionNum, title, id }[] }} TOC HTML and index data.
   */
  static transformIndexToHtml(md) {
    // Extract index from markdown headings
    const index = [];
    const lines = md.split('\n');
    lines.forEach(line => {
      const match = line.match(HEADER_REGEX);
      if (match) {
        const level = match[1].length; // Number of # symbols
        const sectionNum = match[2].replace(/\.$/, ''); // Remove trailing dot if present
        const title = match[3].trim();
        const id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        index.push({ level, sectionNum, title, id });
      }
    });

    // Build nested list structure
    let html = '<nav class="MarkdownIndex"><ul class="MarkdownIndexList">';
    let prevLevel = 2; // Start at h2 level

    index.forEach((item, index) => {
      const levelDiff = item.level - prevLevel;

      if (levelDiff > 0) {
        // Going deeper - open new child-list
        for (let i = 0; i < levelDiff; i++) {
          html += '<ul class="MarkdownIndexChildList">';
        }
      } else if (levelDiff < 0) {
        // Going up - close child-list
        for (let i = 0; i < Math.abs(levelDiff); i++) {
          html += '</li></ul>';
        }
        html += '</li>';
      } else if (index > 0) {
        html += '</li>';
      }

      const anchor = `${item.sectionNum}-${item.id}`;
      html +=
        `<li class="MarkdownIndexItem MarkdownIndexLevel${item.level}">` +
        `<a href="#${anchor}">${item.sectionNum} ${item.title}</a>`;

      prevLevel = item.level;
    });

    // Close any remaining open tags
    for (let i = prevLevel; i >= 2; i--) {
      html += '</li></ul>';
    }
    html += '</nav>';

    return { html, index };
  }

  /**
   * Fetches markdown text from a URL or relative path.
   * @param {string} url - URL or path to the markdown file.
   * @returns {Promise<string>} Markdown file contents.
   * @throws {Error} When the request fails or returns a non-OK status.
   */
  static async load(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    const text = await response.text();
    return text;
  }

  /**
   * Renders markdown content and index into the given DOM containers.
   * @param {string} filename - filename of markdown to load
   * @param {string} contentId - Selector for the markdown content container.
   * @returns {void}
   */
  static async renderHtml(filename, contentId, indexId) {
    const md = await Markdown.load(filename);
    const contentDiv = $(contentId);
    const indexDiv = $(indexId);

    const contentHtml = Markdown.transformContentToHtml(md);
    contentDiv.innerHTML = contentHtml;

    const { html: indexHtml, index } = Markdown.transformIndexToHtml(md);
    indexDiv.innerHTML = indexHtml;

    // Add IDs to content headers for anchor links
    const toAnchor = (h, i, a) =>
      h.textContent.includes(i.sectionNum) &&
      h.textContent.includes(i.title) &&
      (h.id = a);
    index.forEach(i => {
      const a = `${i.sectionNum}-${i.id}`
      const headers = $$(`h${i.level}`, contentDiv);
      headers.forEach(h => toAnchor(h, i, a));
    })

    // Responsive menu handlers
    const menuBtn = $('.MarkdownMenuButton');
    const toggleMenu = () => document.body.classList.toggle('menu-open');
    const closeMenu = () => document.body.classList.remove('menu-open');
    menuBtn?.addEventListener('click', toggleMenu);
    $$('a', indexDiv).forEach(a => a.addEventListener('click', closeMenu));
  }
}
