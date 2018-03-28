import '../assets/style/footer.styl';

export default {
  data () {
    return {
      author: 'jinchao'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>written by {this.author}</span>
      </div>
    )
  }
}
