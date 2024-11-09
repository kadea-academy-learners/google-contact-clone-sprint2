
import { Button } from "./button"
import { Input } from "./input"
 import { Menu as IconMenu, Search as IconSearch } from 'lucide-react'

 
 export default function HeaderComponent() {
    return (
  <div className="border-b">
  <div className="flex items-center px-6 py-2">
    <Button variant="ghost" size="icon" className="mr-4">
      <IconMenu className="h-6 w-6" />
    </Button>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
        <span className="text-white text-lg">C</span>
      </div>
      <h1 className="text-xl text-gray-700">Contact</h1>
    </div>
    <div className="ml-auto flex items-center gap-4">
      <div className="relative">
        <IconSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search"
          className="w-[300px] pl-10 bg-gray-100 border-0 focus-visible:ring-1"
        />
      </div>
    </div>
  </div>
</div>
    )
}