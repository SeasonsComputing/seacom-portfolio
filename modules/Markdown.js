/**
 * Markdown utilities for loading content, rendering HTML, and building a table of contents.
 * @module Markdown
 */

import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
import { $ } from './utils.js'

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
  static async renderHtml(filename, contentId) {
    const md = await Markdown.load(filename);
    const contentDiv = $(contentId);

    const contentHtml = Markdown.transformContentToHtml(md);
    contentDiv.innerHTML = contentHtml;
  }
}
