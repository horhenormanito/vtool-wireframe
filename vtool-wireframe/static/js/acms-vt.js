$(function() {
  'use strict';

  // href="#"の画面遷移を無効化
  $('a[href="#"]').attr("href", "javascript:void(0)");

  // ==============================
  // slideToTop (↑icon)
  // ==============================
  const slideToTop = $("<div id='slideToTop'/>");
  slideToTop.html('<i class="fa fa-arrow-up"></i>');
  slideToTop.css({
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    width: '30px',
    height: '30px',
    color: '#eee',
    'font-size': '',
    'line-height': '30px',
    'text-align': 'center',
    'background-color': '#222d32',
    cursor: 'pointer',
    'border-radius': '3px',
    'z-index': '99999',
    opacity: '.7',
    'display': 'none'
  });
  $('body').append(slideToTop);
  $(window).off('scroll.slideToTop').on('scroll.slideToTop', function() {
    if ($(window).scrollTop() >= 150) {
      if (!$(slideToTop).is(':visible')) {
        $(slideToTop).fadeIn('fast');
      }
    } else {
      $(slideToTop).fadeOut('fast');
    }
  });
  $(slideToTop).click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 'fast');
  });

  // TODO toasts
  // ==============================
  // https://adminlte.io/docs/3.0/javascript/toasts.html
  // ==============================
  $('.toasts').click(function() {
    $(document).Toasts('create', {
      icon: 'far fa-comments fa-lg',
      title: 'Message',
      body: 'メッセージサンプル(bg-danger)',
      class: 'bg-danger',

      // autohide
// autohide: true,
      delay: 2000,
    });
    return false;
  });

  // TODO エラー項目のサンプル
  // ==============================
  // https://cccabinet.jpn.org/bootstrap4/components/tooltips
  // ==============================
  $('.is-invalid').each(function(index, element) {
    const $e = $(element);
    $e.attr('data-toggle', 'tooltip').tooltip({
      title: '入力項目エラーの例',
      container: 'body',
    });
  })
  $('[data-toggle="tooltip"]').tooltip();

  // ==============================
  // http://www.detelu.com/fademover/
  // ==============================
  $('.content-wrapper').fadeMover({});

  // ==============================
  // https://tempusdominus.github.io/bootstrap-4/
  // ==============================
  $.fn.datetimepicker.Constructor.Default =
      $.extend({}, $.fn.datetimepicker.Constructor.Default, {
          dayViewHeaderFormat : 'YYYY年 MMMM',
          locale : moment.locale('ja', {
              week : {
                  dow : 1
              }
          }),
          format : 'L',
    });

  // Bootstrap 4でDatetimePickerを使いたい
  // https:// qiita.com/yaju/items/2cbe5e5914c5be08820a
  $('.date').datetimepicker({});

  // ==============================
  // https://datatables.net/
  // ==============================
  $.extend($.fn.dataTable.defaults, {

// dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4 text-right'f>>"
// + "<'row'<'col-sm-5'i><'col-sm-7'p>><'row'<'col-sm-12'tr>>",
    dom: "<'row'<'col-sm-1'f>>"
        + "<'row'<'col-sm-5'i><'col-sm-7'p>>"
        + "<'row'<'col-sm-12'tr>>",

    language: {
      "sProcessing": "処理中...",
      "sLengthMenu": "_MENU_ 件表示",
      "sZeroRecords": "データはありません。",
      "sInfo": " _TOTAL_ 件中 _START_ から _END_ まで表示",
      "sInfoEmpty": " 0 件中 0 から 0 まで表示",
      "sInfoFiltered": "（全 _MAX_ 件より抽出）",
      "sInfoPostFix": "",
      "sSearch": "抽出:",
      "searchPlaceholder": "抽出したい値を入力",
      "sUrl": "",
      "sEmptyTable" : "データはありません。",
      "oPaginate": {
        "sFirst": "先頭",
        "sPrevious": '<i class="fas fa-angle-left"></i>',
        "sNext": '<i class="fas fa-angle-right"></i>',
        "sLast": "最終"
      }
    },

    // https://datatables.net/reference/option/
    "paging": true,
    "pageLength": 10,
    "lengthChange": false,
    "searching": false,
    "ordering": false,
    order : [],
    "info": true,
    // "autoWidth": false,
    "retrieve": true,

  // https://datatables.net/reference/option/scrollY
  // scrollY : '50vh',
  scrollCollapse : true,
  scrollX : true,
  });

});