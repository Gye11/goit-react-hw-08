import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import { selectContacts } from "../redux/contacts/selectors";
import { useState } from "react";

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2>Contacts</h2>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="🔍 Search contact..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📇 LIST */}
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <span>
              👤 {contact.name} — 📞 {contact.number}
            </span>

            <button onClick={() => dispatch(deleteContact(contact.id))}>
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
