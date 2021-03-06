'use strict';

function Fruit() {
  this._edible = false;
}

/**
 * Returns true if eating this fruit will not kill you.
 *
 * @return {Boolean} Whether you will avoid death.
 */
Fruit.prototype.edible = function() {
  return this._edible;
};

Fruit.prototype.compostable = function() {
  return this._compostable;
};

Fruit.prototype.genus = function() {
  return this._genus;
};

Fruit.prototype.epicarp = function() {
  return this._epicarp;
};

Fruit.prototype.mesocarp = function() {
  return this._mesocarp;
};

Fruit.prototype.endocarp = function() {
  return this._endocarp;
};

Fruit.prototype.calories = function() {
  return this._calories;
};

Fruit.prototype.setCalories = function(calories) {
  this._calories = calories;
};

Fruit.prototype.color = function() {
  return this._color;
};

Fruit.prototype.setColor = function(color) {
  this._color = color;
};

Fruit.prototype.isRotten = function() {
  return this._rotten;
};

Fruit.prototype.setRotten = function(rotten) {
  this._rotten = rotten;
};

Fruit.prototype.hasMold = function() {
  return this._mold;
};

Fruit.prototype.setHasMold = function(mold) {
  this._mold = mold;
};

Fruit.prototype.prepareForEating = function() {
  var safe = true;
  if (this.isRotten()) { safe = false; }
  else if (this.hasMold()) { safe = false; }
  return safe;
};

module.exports = Fruit;
