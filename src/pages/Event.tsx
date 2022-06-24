import { Header } from "../Components/Header";
import { SideBard } from "../Components/SideBar";
import { Video } from "../Components/Video";

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="w-full flex flex-1">
        <Video/>
        <SideBard/>
      </main>
    </div>
  )
}