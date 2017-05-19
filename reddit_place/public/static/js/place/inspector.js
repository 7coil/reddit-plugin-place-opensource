!r.placeModule('inspector', function(require) {
  var template = _.template(
    '<div class="place-inspector-user-row">' +
      '<a href="http://reddit.moustacheminer.com/user/<%- username %>" target="_blank">u/<%- username %></a>' +
    '</div>' +
    '<div class="place-inspector-location-row">(<%- x %>, <%- y %>)</div>' +
    '<div class="place-inspector-timestamp-row"><%- timestamp %></div>' +
    '<div class="place-inspector-link-row">' +
      '<input type="text" value="<%- link %>">' +
    '</div>'
  );

  return {
    isVisible: false,

    init: function(el) {
      this.$el = $(el);

      this.$el.on('focus', 'input', function(e) {
        $(this).select();
      });
    },

    show: function(x, y, username, timestamp) {
      var age = r.TimeText.now() / 1000 - timestamp;
      this.$el.html(template({
        x: x,
        y: y,
        username: username,
        timestamp: r.TimeText.prototype.formatTime(null, age),
        link: 'http://reddit.moustacheminer.com/r/place#x=' + x + '&y=' + y,
      }));
      this.$el.show();
      this.isVisible = true;
    },

    hide: function() {
      this.$el.hide();
      this.isVisible = false;
    },
  };
});
