var GyaradosDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class = \'gyarados pokemon\'> <img id = \'gyarados\' class = \'gyarados pokemon\' src="/Users/student/code/hrsf89-subclass-dance-party/super_happy_gyarados_by_csinorman-d7kr9lw.gif"></span>');
  
  this.setPosition(this.top, 1960);
  this.move();
  this.type = 'gyarados';
};

GyaradosDancer.prototype = Object.create(Dancer.prototype);

GyaradosDancer.prototype.constructor = GyaradosDancer;

GyaradosDancer.prototype.move = function () {
  this.$node.animate({top: this.top, left: -1460}, 5000);
  setTimeout(function () {
    $('#gyaradosContainer > span:lt(1)').remove();
  }, 5000);
};