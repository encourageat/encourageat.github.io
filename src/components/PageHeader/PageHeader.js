import './PageHeader.css'

const PageHeader = (props) => {
    return (
      <div className="Pageheader">
        <hr/>
        <h1>{props.title}</h1>
      </div>
    );
  }
  
  export default PageHeader;