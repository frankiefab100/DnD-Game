# D'n'D Game
A simple emoji tile game built using `Drag and Drop Web API`

## Events Order of Occurrence

 `DragStart ->  DragEnter -> DragOver -> DragLeave -> Drop -> DragEnd`

- The Source (The item that is being dragged) triggers `dragstart` and `dragend` events indicating drag just started and drag just ended respectively.

- The Target (Where it is being dragged to) triggers `dragover` and `drop` events indicating the item is drag-held within the target region and the item has been released within the target region respectively. It also emits optional events - `dragenter` and `dragleave`
