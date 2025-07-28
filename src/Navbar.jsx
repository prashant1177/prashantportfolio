export default function Navbar() {
  return (
    <div class="flex justify-center items-center fixed top-3 w-full z-10">
      <nav class="flex gap-3 p-0.5 border border-white/30 rounded-full bg-white/10 backdrop-blur"> 
      <a href="#home" class="nav-item">Home</a>
      <a href="#project" class="nav-item">Project</a>
      <a href="#tech" class="nav-item">Technical</a>
      <a href="#connect" class="nav-item">Connect</a>
      </nav>
    </div>
  );
}
