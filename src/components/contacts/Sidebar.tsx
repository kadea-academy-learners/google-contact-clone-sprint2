import { Button } from "../ui/button"
import { Clock } from 'lucide-react'
import ContactForm from "./ContactForm"
import LabelManager from "./LabelManager"
import { contactType } from "../../types/contact"

type SidebarProps = {
  newContact: contactType;
  setNewContact: (contact: contactType) => void;
  handleCreateContact: () => void;
  showLabels: boolean;
  setShowLabels: (show: boolean) => void;
  labels: string[];
  setLabels: (labels: string[]) => void;
  newLabel: string;
  setNewLabel: (label: string) => void;
  handleCreateLabel: () => void;
}

export default function Sidebar({
  newContact,
  setNewContact,
  handleCreateContact,
  showLabels,
  setShowLabels,
  labels,
  setLabels,
  newLabel,
  setNewLabel,
  handleCreateLabel
}: SidebarProps) {
  return (
    <aside className="w-64 p-4 border-r min-h-[calc(100vh-64px)]">
      <div className="space-y-2">
        <ContactForm
          newContact={newContact}
          setNewContact={setNewContact}
          handleCreateContact={handleCreateContact}
        />

        <Button variant="ghost" className="w-full justify-start gap-2">
          <Clock className="h-4 w-4" />
          Contact
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-2">
          <Clock className="h-4 w-4" />
          Fréquents
        </Button>

        <LabelManager
          showLabels={showLabels}
          setShowLabels={setShowLabels}
          labels={labels}
          setLabels={setLabels}
          newLabel={newLabel}
          setNewLabel={setNewLabel}
          handleCreateLabel={handleCreateLabel}
        />
      </div>
    </aside>
  )
}