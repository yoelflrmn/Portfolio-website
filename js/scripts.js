 anime({
    targets: "#designer path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 900,
    delay: function(el, i) { return i * 150 },
    direction: "alternate",
    loop: true,
  });
