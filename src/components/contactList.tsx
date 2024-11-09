import { useState } from 'react'
import {contactType} from '../components/ui/sideBar'

export default function ContactList() {
  const [contacts, setContacts] = useState<contactType[]>([])
  return (
    <div className="min-h-screen bg-white">
     
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-4">
          <h2 className="text-lg font-semibold text-gray-700">Contacts</h2>
          {/* Display list of contacts */}
          <ul>
            {contacts.map((contact, index) => (
              <li key={index} className="py-2">
                <div>{contact.firstName} {contact.lastName}</div>
                <div>{contact.email}</div>
                <div>{contact.phone}</div>
                <div>{contact.label}</div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  )
}
