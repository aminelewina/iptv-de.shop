export function TopBar() {
  return (
    <div className="bg-brand-blue-dark text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-end gap-2 text-xs">
        <span className="text-white/80">Nos agents vous répondent</span>
        <span className="text-white/80">Du lundi au vendredi 8h/20h</span>
        <div className="flex items-center">
          <span className="font-bold text-sm">0 972 767 017</span>
          <span className="ml-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
            Service & appel gratuits
          </span>
        </div>
      </div>
    </div>
  )
}
