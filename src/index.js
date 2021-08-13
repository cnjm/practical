import { default as utils } from './utils/index.js';
import { default as date } from './date/index.js';
import { default as storage } from './storage/index.js';
// import * as date from './date/index.js'

export default {
  date, storage, ...utils
}