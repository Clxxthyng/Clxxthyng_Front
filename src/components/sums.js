import './style/sums.css'
export default (props) => {
  let typename = '메신저 요약'

  if (props.type==='border') {
    typename = '공지'
  } else if (props.type==='event') {
    typename = '일정'
  }

  return (
    <div id="sum">
      <h1>{typename}</h1>
      <div className={"viewer"}></div>
    </div>
  )

}