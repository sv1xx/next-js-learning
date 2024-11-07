import type { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/contacts/seo.contacts";

export const metadata: Metadata = {
  title: "",
  ...NO_INDEX_PAGE,
};

export default function ImPage() {
  return (
    <>
      <div className="">Messanger</div>
    </>
  );
}
