itemActive()

// 选项激活
function itemActive(){
  $('#item-info').on('click', (e) => {
    $(e.currentTarget).addClass('active')
      .siblings().removeClass('active')
    $('#text').addClass('active')
      .siblings().removeClass('active')
  })
  $('#item-project').on('click', (e) => {
    $(e.currentTarget).addClass('active')
      .siblings().removeClass('active')
    $('#project').addClass('active')
      .siblings().removeClass('active')
  })
  $('#item-skill').on('click', (e) => {
    $(e.currentTarget).addClass('active')
      .siblings().removeClass('active')
    $('#skill').addClass('active')
      .siblings().removeClass('active')
  })
}
