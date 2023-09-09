"use strict";
!(function (g, f) {
  f(window), f("body");
  const calendarInitializer = () =>{
    var e = new Date(),
      t = String(e.getDate()).padStart(2, "0"),
      a = String(e.getMonth() + 1).padStart(2, "0"),
      n = e.getFullYear(),
      i = new Date(e),
      i =
        (i.setDate(e.getDate() + 1),
        String(i.getDate()).padStart(2, "0"),
        String(i.getMonth() + 1).padStart(2, "0"),
        i.getFullYear(),
        new Date(e)),
      e = (i.setDate(e.getDate() - 1), String(i.getDate()).padStart(2, "0")),
      r = String(i.getMonth() + 1).padStart(2, "0"),
      d = n + "-" + a,
      i = i.getFullYear() + "-" + r + "-" + e,
      r = n + "-" + a + "-" + t,
      v = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      e = document.getElementById("calendar"),
      n =
        (document.getElementById("externalEvents"),
        document.getElementById("removeEvent"),
        f("#addEvent")),
      s = (f("#addEventForm"), f("#addEventPopup")),
      a = f("#updateEvent"),
      m = f("#editEventForm"),
      o = f("#editEventPopup"),
      p = f("#previewEventPopup"),
      t = f("#deleteEvent"),
      l = g.innerWidth < 768,
      c = new FullCalendar.Calendar(e, {
        timeZone: "UTC",
        initialView: l ? "listWeek" : "dayGridMonth",
        themeSystem: "bootstrap5",
        headerToolbar: {
          left: "title prev,next",
          center: null,
          right: "today dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        },
        height: 800,
        contentHeight: 780,
        aspectRatio: 3,
        editable: !0,
        droppable: !0,
        views: { dayGridMonth: { dayMaxEventRows: 2 } },
        direction: "ltr" ,
        nowIndicator: !0,
        now: r + "T09:25:00",
        eventMouseEnter: function (e) {
          var t = e.el,
            a = e.event._def.title,
            e = e.event._def.extendedProps.description;
          e &&
            new bootstrap.Popover(t, {
              template:
                '<div class="popover event-popover"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
              title: a,
              content: e || "",
              placement: "top",
            }).show();
        },
        eventMouseLeave: function () {
          u();
        },
        eventDragStart: function () {
          u();
        },
        eventClick: function (e) {
          var t = e.event._def.title,
            a = e.event._def.extendedProps.description,
            n = e.event._instance.range.start,
            i =
              n.getFullYear() +
              "-" +
              String(n.getMonth() + 1).padStart(2, "0") +
              "-" +
              String(n.getDate()).padStart(2, "0"),
            r = n.toUTCString().split(" "),
            d =
              ((r = "00:00:00" == (r = r[r.length - 2]) ? "" : r),
              e.event._instance.range.end),
            s =
              d.getFullYear() +
              "-" +
              String(d.getMonth() + 1).padStart(2, "0") +
              "-" +
              String(d.getDate()).padStart(2, "0"),
            o = d.toUTCString().split(" "),
            l =
              ((o = "00:00:00" == (o = o[o.length - 2]) ? "" : o),
              e.event._def.ui.classNames[0].slice(3)),
            e = e.event._def.publicId,
            i =
              (f("#edit-event-title").val(t),
              f("#edit-event-start-date").val(i).datepicker("update"),
              f("#edit-event-end-date").val(s).datepicker("update"),
              f("#edit-event-start-time").val(r),
              f("#edit-event-end-time").val(o),
              f("#edit-event-description").val(a),
              f("#edit-event-theme").val(l),
              f("#edit-event-theme").trigger("change.select2"),
              m.attr("data-id", e),
              String(n.getDate()).padStart(2, "0") +
                " " +
                v[n.getMonth()] +
                " " +
                n.getFullYear() +
                (r ? " - " + h(r) : "")),
            s =
              String(d.getDate()).padStart(2, "0") +
              " " +
              v[d.getMonth()] +
              " " +
              d.getFullYear() +
              (o ? " - " + h(o) : ""),
            e =
              (f("#preview-event-title").text(t),
              f("#preview-event-header").addClass("fc-" + l),
              f("#preview-event-start").text(i),
              f("#preview-event-end").text(s),
              f("#preview-event-description").text(a),
              a || f("#preview-event-description-check").css("display", "none"),
              u(),
              document.querySelectorAll(".fc-more-popover"));
          e &&
            e.forEach(function (e) {
              e.remove();
            }),
            p.modal("show");
        },
        events: [
          {
            id: "default-event-id-" + Math.floor(9999999 * Math.random()),
            title: "Reader will be distracted",
            start: d + "-03T13:30:00",
            className: "fc-event-danger",
            description:
              "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
          },
          {
            id: "default-event-id-" + Math.floor(9999999 * Math.random()),
            title: "Rabfov va hezow.",
            start: d + "-14T13:30:00",
            end: d + "-14",
            className: "fc-event-success",
            description:
              "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
          },
          {
            id: "default-event-id-" + Math.floor(9999999 * Math.random()),
            title: "The leap into electronic",
            start: d + "-05",
            end: d + "-06",
            className: "fc-event-primary",
            description:
              "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
          },
          {
            id: "default-event-id-" + Math.floor(9999999 * Math.random()),
            title: "Lorem Ipsum passage - Product Release",
            start: d + "-02",
            end: d + "-04",
            className: "fc-event-primary",
            description:
              "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
          },
          {
            title: "Gibmuza viib hepobe.",
            start: d + "-12",
            end: d + "-10",
            className: "fc-event-pink-dim",
            description:
              "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
          },
          {
            id: "default-event-id-" + Math.floor(9999999 * Math.random()),
            title: "Jidehse gegoj fupelone.",
            start: d + "-07T16:00:00",
            className: "fc-event-danger-dim",
            description:
              "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
          },
          {
            id: "default-event-id-" + Math.floor(9999999 * Math.random()),
            title: "Ke uzipiz zip.",
            start: d + "-16T16:00:00",
            end: d + "-14",
            className: "fc-event-info-dim",
            description:
              "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
          },
          {
            id: "default-event-id-" + Math.floor(9999999 * Math.random()),
            title: "Piece of classical Latin literature",
            start: r,
            end: r + "-01",
            className: "fc-event-primary",
            description:
              "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
          },
          {
            id: "default-event-id-" + Math.floor(9999999 * Math.random()),
            title: "Nogok kewwib ezidbi.",
            start: r + "T10:00:00",
            className: "fc-event-info",
            description:
              "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
          },
          {
            id: "default-event-id-" + Math.floor(9999999 * Math.random()),
            title: "Mifebi ik cumean.",
            start: r + "T14:30:00",
            className: "fc-event-warning-dim",
            description:
              "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
          },
          {
            id: "default-event-id-" + Math.floor(9999999 * Math.random()),
            title: "Play Time",
            start: r + "T17:30:00",
            className: "fc-event-info",
            description:
              "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
          },
          {
            id: "default-event-id-" + Math.floor(9999999 * Math.random()),
            title: "Rujfogve kabwih haznojuf.",
            start: i + "T05:00:00",
            className: "fc-event-danger",
            description:
              "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
          },
          {
            id: "default-event-id-" + Math.floor(9999999 * Math.random()),
            title: "simply dummy text of the printing",
            start: i + "T07:00:00",
            className: "fc-event-primary-dim",
            description:
              "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
          },
        ],
      });
  console.log(s.modal)

    function u() {
      document.querySelectorAll(".event-popover").forEach(function (e) {
        e.remove();
      });
    }
    function h(e) {
      return (
        1 <
          (e = e
            .toString()
            .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [e]).length &&
          ((e = e.slice(1)).pop(),
          (e[5] = +e[0] < 12 ? " AM" : " PM"),
          (e[0] = +e[0] % 12 || 12)),
        (e = e.join(""))
      );
    }
    c.render(),
      n.on("click", function (e) {
        e.preventDefault();
        var e = f("#event-title").val(),
          t = f("#event-start-date").val(),
          a = f("#event-end-date").val(),
          n = f("#event-start-time").val(),
          i = f("#event-end-time").val(),
          r = f("#event-description").val(),
          d = f("#event-theme").val(),
          n = n ? "T" + n + "Z" : "",
          i = i ? "T" + i + "Z" : "";
        c.addEvent({
          id: "added-event-id-" + Math.floor(9999999 * Math.random()),
          title: e,
          start: t + n,
          end: a + i,
          className: "fc-" + d,
          description: r,
        }),
          s.modal("hide");
      }),
      a.on("click", function (e) {
        e.preventDefault();
        var e = f("#edit-event-title").val(),
          t = f("#edit-event-start-date").val(),
          a = f("#edit-event-end-date").val(),
          n = f("#edit-event-start-time").val(),
          i = f("#edit-event-end-time").val(),
          r = f("#edit-event-description").val(),
          d = f("#edit-event-theme").val(),
          n = n ? "T" + n + "Z" : "",
          i = i ? "T" + i + "Z" : "";
        c.getEventById(m[0].dataset.id).remove(),
          c.addEvent({
            id: m[0].dataset.id,
            title: e,
            start: t + n,
            end: a + i,
            className: "fc-" + d,
            description: r,
          }),
          o.modal("hide");
      }),
      t.on("click", function (e) {
        e.preventDefault(), c.getEventById(m[0].dataset.id).remove();
      }),
      
      s.on("hidden.bs.modal", function (e) {
        setTimeout(function () {
          f("#addEventForm input,#addEventForm textarea").val(""),
            f("#event-theme").val("event-primary"),
            f("#event-theme").trigger("change.select2");
        }, 1e3);
      }),
      p.on("hidden.bs.modal", function (e) {
        f("#preview-event-header").removeClass().addClass("modal-header");
      });
  }
  f(document).ready(calendarInitializer)
})(window, jQuery);
