import '../../css/App.css';

export const CopyrightFooter = () => {
  const controlUrl = "http://54.94.82.25:4173"
  return (
    <div className="copyright-footer-container">
      <span>© 2022 <a href={controlUrl} target="_blank">Total Ink</a> - Todos os direitos reservados.</span>
    </div>
    
  )
}