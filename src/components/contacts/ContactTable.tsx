import { contactType } from "../../types/contact"

type ContactTableProps = {
  contacts: contactType[];
}

export default function ContactTable({ contacts }: ContactTableProps) {
  return (
    <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-md">
      <thead>
        <tr>
          <th className="bg-gray-100 border-b border-gray-300 py-3 px-4 text-left text-xs font-bold text-gray-600 uppercase">Nom</th>
          <th className="bg-gray-100 border-b border-gray-300 py-3 px-4 text-left text-xs font-bold text-gray-600 uppercase">Prénom</th>
          <th className="bg-gray-100 border-b border-gray-300 py-3 px-4 text-left text-xs font-bold text-gray-600 uppercase">Email</th>
          <th className="bg-gray-100 border-b border-gray-300 py-3 px-4 text-left text-xs font-bold text-gray-600 uppercase">Téléphone</th>
          <th className="bg-gray-100 border-b border-gray-300 py-3 px-4 text-left text-xs font-bold text-gray-600 uppercase">Libellé</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="border-b border-gray-300 py-3 px-4 text-left text-xs text-gray-600">{contact.lastName}</td>
            <td className="border-b border-gray-300 py-3 px-4 text-left text-xs text-gray-600">{contact.firstName}</td>
            <td className="border-b border-gray-300 py-3 px-4 text-left text-xs text-gray-600">{contact.email}</td>
            <td className="border-b border-gray-300 py-3 px-4 text-left text-xs text-gray-600">{contact.phone}</td>
            <td className="border-b border-gray-300 py-3 px-4 text-left text-xs text-gray-600">{contact.label}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}