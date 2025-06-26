import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
 
 
function Navbar() {
 
  const navigate = useNavigate()
 
  const { handleLogout } = useContext(AuthContext)
 
  function logout(){
    handleLogout()
    alert("O usuário foi desconectado com sucesso!")
    navigate("/")
  }
 
  return (
    <div className="
        flex
        justify-center
        w-full
        p-4
        text-gray-600
        bg-gray-100">
        <div className="
            container
            flex
            justify-between
            text-lg">
            <Link to="/home" className="text-2xl fonte-bold"> Blog Pessoal </Link>
                <div className="
                    flex
                    gap-4">
                    Postagem
                    <Link to='/temas' className='hover:underline'>Temas</Link>
                    <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                    <Link to="/cadastro" className="text-2xl fonte-bold"> Cadastro </Link>
                    <Link to="/login" onClick={logout} className="text-2xl fonte-bold hover:underline">
                     Sair
                    </Link>
                </div>
        </div>
    </div>
  )
}
 
export default Navbar