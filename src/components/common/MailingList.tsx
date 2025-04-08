import { useState } from "react";
import { LuMail } from "react-icons/lu";

const MailingListComponent = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <div className="md:w-3/5 px-5 py-16 md:py-24 md:px-24 bg-gradient-to-br from-purple-light to-darkPurple text-light flex flex-col items-start gap-6 rounded-xl">
      <p className="text-2xl md:text-4xl font-bold">Join Our Mailing List</p>
      <p className="font-light ">
        Get the latest updates from the church right in your mail
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md md:max-w-2xl flex flex-col md:flex-row items-start gap-4"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" input-field "
        />
        <button
          type="submit"
          className="btn-pry hover:scale-105 flex items-center gap-2 px-6 py-3 rounded-md"
        >
          Subscribe <LuMail />
        </button>
      </form>
    </div>
  );
};

export default MailingListComponent;
