import './style/sums.css'
export default (props) => {
  if (props.type==='border') {
    return (
      <div id="sum">
        <h1>공지</h1>
        <div className={"viewer"}></div>
      </div>
    )
  }
  if (props.type==='event') {
    return (
      <div id="sum">
        <h1>일정</h1>
        <div className={"viewer"}></div>
      </div>
    )
  }
  if (props.type==='messenger') {
    return (
      <div id="sum">
        <h1>메신저 요약</h1>
        <div className={"viewer"}></div>
      </div>
    )
  }
}