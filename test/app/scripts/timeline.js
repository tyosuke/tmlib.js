tm.define("tests.timeline.DemoScene", {
    superClass: "tm.app.Scene",
 
    init: function() {
        this.superInit();
    },
 
    update: function(app) {
        var p = app.pointing;
        if (p.getPointingStart() == true) {
            var circle = tm.display.CircleShape();
            circle.blendMode = "lighter";
            circle.startX = p.x;
            circle.startY = p.y;
            circle.setPosition(p.x, p.y);
            this.addChild(circle);
 
            circle.startAnim = function() {
 
                this.x = this.startX;
                this.y = this.startY;
                this.alpha = 0.5;
                this.scaleX = this.scaleY = 1.0;
                this.timeline
                    .to(200, {x: 200, "y": 400}, 1000)
                    .to(0, {"alpha": 1.0}, 1000)
                    .call(1500,
                        function() {
                            console.log("finish");
                        });
            };
            circle.startAnim();
 
            circle.onanimationend = function() {
                this.startAnim();
            };
 
        }
    }
});
 
tm.define("tests.timeline.ToTestScene", {
    superClass: "tm.app.Scene",
 
    init: function() {
        this.superInit();
        
        var shape = tm.display.StarShape().addChildTo(this);
        shape.setPosition(100, 100);
        
        shape.timeline
            .to(0, {x:500}, 1000)
            .to(1000, {y:400}, 1000)
            .to(2000, {alpha:0}, 1000);
    },
});
 
tm.define("tests.timeline.call", {
    superClass: "tm.app.Scene",
 
    init: function() {
        this.superInit();
        
        var shape = tm.display.StarShape().addChildTo(this);
        shape.setPosition(100, 100);
        
        shape.timeline
            .to(0, {x:500}, 1000)
            .to(1000, {y:400}, 1000)
            .to(2000, {alpha:0}, 1000)
            .call(500,  function() {
                alert("500")
            })
            .call(2500,  function() {
                alert("2500")
            })
            ;
    },
});


tm.define("tests.timeline.SetTestScene", {
    superClass: "tm.app.Scene",
 
    init: function() {
        this.superInit();
        
        var shape = tm.display.StarShape().addChildTo(this);
        shape.setPosition(100, 100);
        
        shape.timeline
            .to(0, {x:500}, 1000)
            .to(1000, {y:400}, 1000)
            .to(2000, {alpha:0}, 1000)
            .set(3000, 
                {
                    x: 100,
                    y: 100,
                    alpha: 1.0,
                });
    },
});
 
tm.define("tests.timeline.ConcentrationScene", {
    superClass: "tm.app.Scene",
 
    init: function() {
        this.superInit();
    },
 
    update: function(app) {
        var p = app.pointing;
        
        if (this.children.length < 36 && app.frame%4 == 0) {
            var color = "hsla({0}, 75%, 50%, 0.5)".format(Math.rand(0, 360));
            var circle = tm.display.CircleShape(128, 128, {
                fillStyle: color,
            });
            circle.blendMode = "lighter";
            var rad = Math.degToRad(Math.rand(0, 360));
            circle.x = Math.cos(rad)*300 + app.width/2  + Math.rand(-50, 50);
            circle.y = Math.sin(rad)*300 + app.height/2 + Math.rand(-50, 50);
            this.addChild(circle);
 
            circle.startAnim = function() {
                
                this.alpha = 0;
                this.scaleX = 0.2;
                this.scaleY = 0.2;
                this.timeline
                    .set(0, {alpha:0, scaleX:0.2, scaleY:0.2})
                    .to(0, {"alpha": 1.0}, 1000)
                    .to(1000, {x: app.width/2, "y": app.height/2}, 500)
                    .to(1000, {scaleX: 1, scaleY: 1}, 500)
                    .call(2000, 
                        function() {
                            console.log("finish");
                        });
                
            };
            circle.startAnim();
 
            circle.onanimationend = function() {
                this.startAnim();
            };
 
        }
    }
});


tm.define("tests.timeline.Demo22Scene", {
    superClass: "tm.app.Scene",

    init: function() {
        this.superInit();
    },

    update: function(app) {
        var p = app.pointing;
        if (p.getPointingStart() == true) {
            var circle = tm.display.CircleShape();
            circle.blendMode = "lighter";
            circle.startX = p.x;
            circle.startY = p.y;
            circle.setPosition(p.x, p.y);
            this.addChild(circle);

            circle.startAnim = function() {
                this.x = this.startX;
                this.y = this.startY;
                this.alpha = 1.0;
                this.scaleX = this.scaleY = 1.0;

                this.timeline
                    .by(0, {x:300}, 1000)
                    .by(500, {y:300}, 1000)
                    .to(500, {alpha:0.0}, 1000)
                    .to(500, {scaleX:2, scaleY:2}, 1000);
            };
            circle.startAnim();

            circle.onanimationend = function() {
                this.startAnim();
            };

        }
    }
});


tm.define("tests.timeline.load", {
    superClass: "tm.app.Scene",

    init: function() {
        this.superInit();
    },

    update: function(app) {
        var p = app.pointing;
        if (p.getPointingStart() == true) {
            var circle = tm.display.CircleShape();
            circle.blendMode = "lighter";
            circle.startX = p.x;
            circle.startY = p.y;
            circle.setPosition(p.x, p.y);
            this.addChild(circle);

            circle.startAnim = function() {
                this.x = this.startX;
                this.y = this.startY;
                this.alpha = 1.0;
                this.scaleX = this.scaleY = 1.0;
                
                this.timeline.load({
                    timeline: {
                        by: [{x:300}, 1000],
                        by: [{y:300}, 1000],
                        to: [{alpha:0.0}, 1000, 500],
                        to: [{scaleX:2, scaleY:2}, 1000, 500],
                    }
                });
            };
            circle.startAnim();

            circle.onanimationend = function() {
                this.startAnim();
            };

        }
    }
});
