document.addEventListener('DOMContentLoaded', function () {
  const showSidebar = document.getElementById('showSidebar')
  const closeSidebar = document.getElementById('closeSidebar')
  const overlay = document.getElementById('overlay ')
  const sidebar = document.getElementById('sidebar-main')
  const body = document.body
  if (showSidebar) {
    showSidebar.addEventListener('click', function () {
      sidebar.classList.add('active')
      if (sidebar.classList.contains('active')) {
        body.style.overflow = 'hidden'
        // body.style.pointerEvents = 'none'
      }
    })
  }
  if (closeSidebar) {
    closeSidebar.addEventListener('click', function () {
      sidebar.classList.remove('active')
      if (!sidebar.classList.contains('active')) {
        body.style.overflow = 'visible' // You can use 'auto' or 'scroll' as well
      }
    })
  }
})
