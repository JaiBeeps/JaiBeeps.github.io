$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(225, 635, 120, 25, "pink");
    createPlatform(425, 515, 90, 40, "red");
    createPlatform(425, 386, 80, 30, "cyan");
    createPlatform(200, 300, 100, 20, "purple");
    createPlatform(365, 245, 30, 144, "white");
    createPlatform(255, 400, 10, 124, "yellow");
    createPlatform(650, 390, 10, 30, "black");
    createPlatform(650, 244, 7, 30);
    createPlatform(870, 315, 20, 35);
    createPlatform(890, 315, 60, 35);
    createPlatform(500, 200, 8, 20);
    createPlatform(1300, 0, 120, 1400);

    // TODO 3 - Create Collectables
    createCollectable("diamond", 425, 425, 0.5, 0.7);
    createCollectable("database", 425, 296, 0.5, 0.3);
    createCollectable("max", 245, 50, 0.05, 0.2);
    createCollectable("grace", 1000, 100, 0, 0.2);

    // TODO 4 - Create Cannons
    createCannon("top", 300, 500, 30);
    createCannon("top", 425, 1000, 30);
    createCannon("bottom", 825, 1550, 30);
    createCannon("right", 703.5, 4000, 300);
    createCannon("left", 200, 2000, 300)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
