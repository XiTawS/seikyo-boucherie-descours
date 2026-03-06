"use client";

import EditableText from "@/components/cms/EditableText";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-deep)] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <EditableText contentKey="footer.name" defaultValue="Boucherie J. Descours" tag="h3"
            className="font-display italic text-2xl text-white mb-2" />
          <EditableText contentKey="footer.desc" defaultValue="Boucherie — Charcuterie — Traiteur"
            tag="p" className="text-white/40 text-sm" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[var(--color-red)]/50" />
            <span className="text-white/50 text-sm">8 Av. Georges Bert, Saint-Donat</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[var(--color-red)]/50" />
            <span className="text-white/50 text-sm">04 75 02 88 25</span>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <a href="https://www.facebook.com/p/Boucherie-Charcuterie-Traiteur-J-Descours-100063821301619/" target="_blank" rel="noopener noreferrer"
              className="text-white/30 hover:text-[var(--color-red)] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-white/20 text-xs">
          Créé par{" "}
          <a href="https://seikyo.fr" target="_blank" rel="noopener noreferrer"
            className="text-[var(--color-red)]/40 hover:text-[var(--color-red)] transition-colors">
            Seikyo
          </a>
        </p>
      </div>
    </footer>
  );
}