// import { useState } from 'react'
// import Sidebar from './Sidebar.jsx'
// import Topbar from './Topbar.jsx'
// import '../styles/DashboardLayout.css'

// function DashboardLayout({ title, subtitle, children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false)

//   return (
//     <div className="app-shell">
//       <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
//       <div className="app-shell__main">
//         <Topbar title={title} subtitle={subtitle} onMenuClick={() => setSidebarOpen(true)} />
//         <main className="app-shell__content">{children}</main>
//       </div>
//     </div>
//   )
// }

// export default DashboardLayout


// import { useState } from 'react'
// import Sidebar from './Sidebar.jsx'
// import Topbar from './Topbar.jsx'
// import '../styles/DashboardLayout.css'

// function DashboardLayout({ title, subtitle, children, user }) {

//   const [sidebarOpen, setSidebarOpen] = useState(false)

//   return (
//     <div className="app-shell">

//       <Sidebar 
//         open={sidebarOpen} 
//         onClose={() => setSidebarOpen(false)} 
//       />


//       <div className="app-shell__main">


//         <Topbar 
//           title={title}
//           subtitle={subtitle}
//           onMenuClick={() => setSidebarOpen(true)}
//           user={user}
//         />


//         <main className="app-shell__content">
//           {children}
//         </main>


//       </div>

//     </div>
//   )
// }

// export default DashboardLayout
import { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'
import '../styles/DashboardLayout.css'

function DashboardLayout({ title, subtitle, children, user }) {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-shell">

      <Sidebar 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />


      <div className="app-shell__main">

        <Topbar
          title={title}
          subtitle={subtitle}
          onMenuClick={() => setSidebarOpen(true)}
          user={user}
        />


        <main className="app-shell__content">
          {children}
        </main>

      </div>

    </div>
  )
}

export default DashboardLayout