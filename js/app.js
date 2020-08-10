new Vue({
  el: '#app',
  data: {
    pageTitle: 'test',
    results: [] // apiで取得したデータを格納する配列
  },
  mounted() {
    // axiosのGETメソッドでデータ取得
    axios.get('http://localhost:8001/wp-json/wp/v2/news')
      .then(response  => this.results = response.data)
      .catch(response => console.log(response))
  }
});