import { practiceAreas } from "@/data/portfolio";

export function PracticeBand() {
  return (
    <div className="practice-band" aria-label="Core expertise">
      <div className="container practice-inner">
        <span className="practice-label">Core expertise</span>
        <ul className="practice-list">
          {practiceAreas.map((area, index) => (
            <li key={area.label}>
              <span className="practice-number">0{index + 1}</span>
              <div><strong>{area.label}</strong><span>{area.detail}</span></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
