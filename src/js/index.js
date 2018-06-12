
import $ from 'jquery';

import '../less/index.less';

$(function () {
    $('svg[data-src]').each((index, svg) => {
        const src = $(svg).data('src');
        const width = $(svg).attr('width');
        const height = $(svg).attr('height');

        $.ajax({
            url: src,
            dataType: 'xml',
            success: (svgDoc) => {
                const doc = svgDoc.documentElement;
                $(doc).attr({
                    width: width,
                    height: height
                })
                $(svg).after(doc).remove();
            }
        })
    });
});