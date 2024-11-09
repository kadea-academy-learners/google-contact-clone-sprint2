import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Plus } from 'lucide-react'
import { contactType } from "../../types/contact"

type ContactFormProps = {
  newContact: contactType;
  setNewContact: (contact: contactType) => void;
  handleCreateContact: () => void;
}

export default function ContactForm({ newContact, setNewContact, handleCreateContact }: ContactFormProps) {
  const formFields = [
    { id: 'firstName', label: 'Prénom', type: 'text' },
    { id: 'lastName', label: 'Nom', type: 'text' },
    { id: 'company', label: 'Entreprise', type: 'text' },
    { id: 'role', label: 'Fonction', type: 'text' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'phone', label: 'Téléphone', type: 'tel' },
    { id: 'label', label: 'Libellé', type: 'text' },
  ] as const;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full justify-start gap-2 bg-blue-100 hover:bg-blue-200 text-blue-600">
          <Plus className="h-4 w-4" />
          Créer un contact
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Créer un contact</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {formFields.map(({ id, label, type }) => (
            <div key={id} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={id} className="text-right">
                {label}
              </Label>
              <Input
                id={id}
                type={type}
                value={newContact[id as keyof contactType]}
                onChange={(e) => setNewContact({ ...newContact, [id]: e.target.value })}
                className="col-span-3"
              />
            </div>
          ))}
        </div>
        <Button onClick={handleCreateContact}>Créer</Button>
      </DialogContent>
    </Dialog>
  )
}