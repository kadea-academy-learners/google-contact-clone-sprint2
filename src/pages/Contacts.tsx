import { useState } from "react"
import Header from '../components/ui/Header'
import Sidebar from "../components/contacts/Sidebar"
import ContactTable from "../components/contacts/ContactTable"
import { contactType } from "../types/contact"

export default function Contacts() {
  const [contacts, setContacts] = useState<contactType[]>([])
  const [showLabels, setShowLabels] = useState(false)
  const [labels, setLabels] = useState<string[]>([])
  const [newContact, setNewContact] = useState<contactType>({
    firstName: '',
    lastName: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    label: ''
  })
  const [newLabel, setNewLabel] = useState('')

  const handleCreateContact = () => {
    setContacts([...contacts, newContact])
    setNewContact({
      firstName: '',
      lastName: '',
      company: '',
      role: '',
      email: '',
      phone: '',
      label: ''
    })
  }

  const handleCreateLabel = () => {
    if (newLabel.trim() !== '') {
      setLabels([...labels, newLabel])
      setNewLabel('')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        <Sidebar
          newContact={newContact}
          setNewContact={setNewContact}
          handleCreateContact={handleCreateContact}
          showLabels={showLabels}
          setShowLabels={setShowLabels}
          labels={labels}
          setLabels={setLabels}
          newLabel={newLabel}
          setNewLabel={setNewLabel}
          handleCreateLabel={handleCreateLabel}
        />
        <div className="min-h-screen bg-white w-full">
          <div className="flex">
            <ContactTable contacts={contacts} />
          </div>
        </div>
      </div>
    </div>
  )
}