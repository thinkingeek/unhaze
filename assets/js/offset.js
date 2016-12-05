function getOffset(element){
    var docElem, win, rect, doc,
        elem = element;

    if ( !elem ) {
        return;
    }

    rect = elem.getBoundingClientRect();

    // Make sure element is not hidden (display: none) or disconnected
    if ( rect.width || rect.height || elem.getClientRects().length ) {
        doc = elem.ownerDocument;
        win = getWindow( doc );
        docElem = doc.documentElement;

        return {
            top: rect.top + win.pageYOffset - docElem.clientTop,
            left: rect.left + win.pageXOffset - docElem.clientLeft
        };
    }
}
function getWindow( elem ) {
    return Window == elem ? elem : elem.nodeType === 9 && elem.defaultView;
}
