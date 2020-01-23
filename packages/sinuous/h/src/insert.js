import { api } from './api.js';
import { add } from './add.js';
import { clearAll } from './utils.js';

export function insert(el, value, endMark, current, startNode) {
  // This is needed if the el is a DocumentFragment initially.
  el = (endMark && endMark.parentNode) || el;

  if (value === current);
  else if (
    (!current || typeof current === 'string') &&
    (typeof value === 'string' || (typeof value === 'number' && (value += '')))
  ) {
    // Block optimized for string insertion.
    if (current == null || !el.firstChild) {
      if (endMark) {
        add(el, value, endMark);
      } else {
        // textContent is a lot faster than append -> createTextNode.
        el.textContent = value;
      }
    } else {
      if (endMark) {
        (endMark.previousSibling || el.lastChild).data = value;
      } else {
        el.firstChild.data = value;
      }
    }
    current = value;
  } else if (typeof value === 'function') {
    api.subscribe(function insertContent() {
      current = api.insert(el, value.call({ el, endMark }), endMark, current, startNode);

      // Save startNode of current. In clearAll() marker.previousSibling
      // is not always accurate if content gets pulled before clearing.
      if (current instanceof Node) {
        startNode = current;
      }
    });
  } else {
    // Block for nodes, fragments, Arrays, non-stringables and node -> stringable.
    clearAll(el, current, endMark, startNode);
    current = null;

    if (value && value !== true) {
      current = add(el, value, endMark);
    }
  }

  return current;
}
