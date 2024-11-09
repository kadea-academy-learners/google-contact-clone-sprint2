import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Plus, X, ChevronRight } from 'lucide-react'

type LabelManagerProps = {
  showLabels: boolean;
  setShowLabels: (show: boolean) => void;
  labels: string[];
  setLabels: (labels: string[]) => void;
  newLabel: string;
  setNewLabel: (label: string) => void;
  handleCreateLabel: () => void;
}

export default function LabelManager({
  showLabels,
  setShowLabels,
  labels,
  setLabels,
  newLabel,
  setNewLabel,
  handleCreateLabel
}: LabelManagerProps) {
  return (
    <div className="pt-2">
      <Button
        variant="ghost"
        className="w-full justify-between"
        onClick={() => setShowLabels(!showLabels)}
      >
        Libellés
        <ChevronRight className={`h-4 w-4 transition-transform ${showLabels ? 'rotate-90' : ''}`} />
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
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="w-full mt-2">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter un libellé
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter un libellé</DialogTitle>
              </DialogHeader>
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
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  )
}