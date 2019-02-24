$('.icon-list i').on('mouseenter', (e) => {
    $(e.currentTarget.nextSibling).toggleClass('show')
})
$('.icon-list i').on('mouseleave', (e) => {
    $(e.currentTarget.nextSibling).toggleClass('show')
})