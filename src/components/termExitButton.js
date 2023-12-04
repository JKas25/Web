function TermExitButton({buttonClass, buttonText, link}) {

    return (
          <div className="exitButton">
            <a href={link} className={`btn btn-${buttonClass} text-white`}>
              {buttonText}
            </a>
          </div>
    );
  }

  
  export default TermExitButton;
  