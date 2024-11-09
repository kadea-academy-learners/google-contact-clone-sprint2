
import { useState } from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Dialog as RadixDialog, DialogTrigger as RadixDialogTrigger, DialogContent as RadixDialogContent, DialogHeader as RadixDialogHeader, DialogTitle as RadixDialogTitle } from "./dialog"
import { Plus as IconPlus, Clock as IconClock, ChevronRight as IconChevronRight, X as IconX } from 'lucide-react'


export type contactType = {
    firstName: string
    lastName: string
    company: string
    role: string
    email: string
    phone: string
    label: string
  }
export default function SideBar() {
    const [showLabels, setShowLabels] = useState(false)
    const [labels, setLabels] = useState<any[]>([])
   const [contacts, setContacts] = useState<contactType[]>([])
    
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
    return <div>
          {/* Sidebar */}
          <aside className="w-64 p-4 border-r min-h-[calc(100vh-64px)]">
          <div className="space-y-2">
            <RadixDialog>
              <RadixDialogTrigger asChild>
                <Button
                  className="w-full justify-start gap-2 bg-blue-100 hover:bg-blue-200 text-blue-600"
                >
                  <IconPlus className="h-4 w-4" />
                  Créer un contact
                </Button>
              </RadixDialogTrigger>
              <RadixDialogContent>
                <RadixDialogHeader>
                  <RadixDialogTitle>Créer un contact</RadixDialogTitle>
                </RadixDialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="firstName" className="text-right">
                      Prénom
                    </Label>
                    <Input
                      id="firstName"
                      value={newContact.firstName}
                      onChange={(e) => setNewContact({ ...newContact, firstName: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="lastName" className="text-right">
                      Nom
                    </Label>
                    <Input
                      id="lastName"
                      value={newContact.lastName}
                      onChange={(e) => setNewContact({ ...newContact, lastName: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="company" className="text-right">
                      Entreprise
                    </Label>
                    <Input
                      id="company"
                      value={newContact.company}
                      onChange={(e) => setNewContact({ ...newContact, company: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="role" className="text-right">
                      Fonction
                    </Label>
                    <Input
                      id="role"
                      value={newContact.role}
                      onChange={(e) => setNewContact({ ...newContact, role: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={newContact.email}
                      onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="phone" className="text-right">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={newContact.phone}
                      onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="label" className="text-right">
                      Libellé
                    </Label>
                    <Input
                      id="label"
                      value={newContact.label}
                      onChange={(e) => setNewContact({ ...newContact, label: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <Button onClick={handleCreateContact}>Créer</Button>
              </RadixDialogContent>
            </RadixDialog>

            <Button variant="ghost" className="w-full justify-start gap-2">
              <IconClock className="h-4 w-4" />
              Contact
            </Button>

            <Button variant="ghost" className="w-full justify-start gap-2">
              <IconClock className="h-4 w-4" />
              Fréquents
            </Button>

            <div className="pt-2">
              <Button
                variant="ghost"
                className="w-full justify-between"
                onClick={() => setShowLabels(!showLabels)}
              >
                Libellés
                <IconChevronRight className={`h-4 w-4 transition-transform ${showLabels ? 'rotate-90' : ''}`} />
              </Button>
              {showLabels && (
                <div className="ml-4 mt-2 space-y-2">
                  {labels.map((label, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{label}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setLabels(labels.filter((_, i) => i !== index))}
                      >
                        <IconX className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <RadixDialog>
                    <RadixDialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full mt-2">
                        <IconPlus className="h-4 w-4 mr-2" />
                        Ajouter un libellé
                      </Button>
                    </RadixDialogTrigger>
                    <RadixDialogContent>
                      <RadixDialogHeader>
                        <RadixDialogTitle>Ajouter un libellé</RadixDialogTitle>
                      </RadixDialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="newLabel" className="text-right">
                            Nom du libellé
                          </Label>
                          <Input
                            id="newLabel"
                            value={newLabel}
                            onChange={(e) => setNewLabel(e.target.value)}
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <Button onClick={handleCreateLabel}>Ajouter</Button>
                    </RadixDialogContent>
                  </RadixDialog>
                </div>
              )}
            </div>
          </div>
        </aside>
    </div>;
}