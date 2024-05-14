export default function Footer(props){
  const theme = props.theme;
  return(
    <footer className={theme}>
      <div>©2024 <a href='https://github.com/annieherieau'>Annie Hérieau</a> - Vite - React - Bootstrap</div>
    </footer>
  )
}