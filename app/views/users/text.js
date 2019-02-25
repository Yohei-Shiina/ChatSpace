$.ajax({
  url: '/users',
  type: 'GET',
  data: { keyword: input },
  dataType: 'json',
  processData: false,
  contentType: false
})