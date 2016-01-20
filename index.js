/**
 * 脉冲软件
 * http://maichong.it
 * Created by Liang on 15/10/1.
 * liang@maichong.it
 */

module.exports = function round(val, precision) {
  val = parseFloat(val) || 0;
  return parseFloat(val.toFixed(precision));
};
module.exports.default = module.exports;
