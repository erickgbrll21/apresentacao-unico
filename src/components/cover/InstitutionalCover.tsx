import React from "react";

const NAVY = "#0A1F44";
const BLUE = "#0056FF";
const BLUE_LIGHT = "#3B82F6";

export const InstitutionalLogo: React.FC<{ scale?: number }> = ({ scale = 1 }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14 * scale }}>
    <svg width={48 * scale} height={48 * scale} viewBox="0 0 52 52" fill="none">
      <path d="M26 4 L44 14 V38 L26 48 L8 38 V14 Z" stroke={BLUE_LIGHT} strokeWidth={1.8} fill="#EFF6FF" />
      <rect x={16} y={14} width={20} height={26} rx={3} stroke={NAVY} strokeWidth={1.8} fill="#FFFFFF" />
      <path d="M20 20h12M20 25h9M20 30h6" stroke={BLUE_LIGHT} strokeWidth={1.4} strokeLinecap="round" opacity={0.45} />
      <path d="M28 32 L38 22 L38 28 L44 28 L34 40 L34 34 L28 34 Z" fill={BLUE} />
    </svg>
    <span style={{ fontSize: 32 * scale, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, fontFamily: "system-ui, sans-serif" }}>
      <span style={{ color: NAVY }}>Concorre</span>
      <span style={{ color: BLUE }}>AI</span>
    </span>
  </div>
);

export const ValecardLogo: React.FC<{ scale?: number }> = ({ scale = 1 }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 * scale }}>
    <span style={{ fontSize: 28 * scale, fontWeight: 800, fontStyle: "italic", color: NAVY, letterSpacing: "0.03em", fontFamily: "system-ui, sans-serif" }}>
      VALECARD
    </span>
    <svg width={32 * scale} height={26 * scale} viewBox="0 0 36 28" fill="none">
      <rect x={0} y={4} width={28} height={5} rx={2} fill="#F97316" />
      <rect x={4} y={12} width={22} height={5} rx={2} fill="#FB923C" />
      <rect x={8} y={20} width={16} height={5} rx={2} fill="#FDBA74" />
    </svg>
  </div>
);

const PHI = (1 + Math.sqrt(5)) / 2;
const RAW_VERTS: [number, number, number][] = [
  [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
  [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
  [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1],
];
const EDGES: [number, number][] = [
  [0,1],[0,5],[0,7],[0,11],[1,5],[1,7],[1,8],[2,3],[2,4],[2,6],[2,10],
  [3,4],[3,6],[3,8],[4,9],[4,10],[5,9],[5,11],[6,8],[6,10],[7,8],[7,11],[9,10],[9,11],
];
const FACES = [
  [0,5,1],[0,7,5],[0,11,7],[0,1,11],[1,5,8],[1,8,7],[5,9,8],[5,11,9],[7,8,6],[7,6,11],
  [11,6,10],[11,10,9],[8,9,3],[8,3,6],[9,10,4],[9,4,3],[6,3,2],[6,2,10],[10,2,4],[3,4,2],
];
const BOKEH = [
  {x:120,y:80,r:3,o:0.25},{x:480,y:60,r:2,o:0.2},{x:560,y:140,r:4,o:0.18},{x:90,y:200,r:2.5,o:0.15},
  {x:520,y:380,r:3.5,o:0.22},{x:180,y:420,r:2,o:0.12},{x:600,y:280,r:2,o:0.2},{x:400,y:520,r:3,o:0.15},
  {x:250,y:100,r:1.5,o:0.18},{x:580,y:480,r:2.5,o:0.14},{x:140,y:340,r:2,o:0.16},{x:460,y:180,r:1.8,o:0.2},
];

function rotateY(v: [number,number,number], a: number) {
  const c = Math.cos(a), s = Math.sin(a);
  return [v[0]*c+v[2]*s, v[1], -v[0]*s+v[2]*c] as [number,number,number];
}
function rotateX(v: [number,number,number], a: number) {
  const c = Math.cos(a), s = Math.sin(a);
  return [v[0], v[1]*c-v[2]*s, v[1]*s+v[2]*c] as [number,number,number];
}
function project(v: [number,number,number], cx: number, cy: number, scale: number) {
  const depth = 2.8 + v[2]*0.35, f = scale/depth;
  return [cx+v[0]*f, cy-v[1]*f, v[2]] as [number,number,number];
}

export const InstitutionalCrystal: React.FC = () => {
  const cx = 320, cy = 290, scale = 125;
  const verts2d = RAW_VERTS.map(v => project(rotateX(rotateY(v, 0.55), 0.35), cx, cy, scale));
  const sortedFaces = FACES.map(indices => ({
    indices,
    avgZ: indices.reduce((s,i) => s + verts2d[i][2], 0) / indices.length,
  })).sort((a,b) => a.avgZ - b.avgZ);

  return (
    <svg style={{ position:"absolute", right:0, top:"50%", transform:"translateY(-50%)", width:"54%", height:"92%", overflow:"visible", pointerEvents:"none" }} viewBox="0 0 640 620">
      <defs>
        <radialGradient id="crystalGlow" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <filter id="edgeGlow"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="softGlow"><feGaussianBlur stdDeviation="6"/></filter>
        <linearGradient id="streakGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(59,130,246,0)"/>
          <stop offset="50%" stopColor="rgba(147,197,253,0.35)"/>
          <stop offset="100%" stopColor="rgba(59,130,246,0)"/>
        </linearGradient>
      </defs>
      <ellipse cx={320} cy={290} rx={240} ry={220} fill="url(#crystalGlow)"/>
      <path d="M 60 200 Q 200 180 320 220 T 580 160" stroke="url(#streakGrad)" strokeWidth={12} fill="none" opacity={0.5} filter="url(#softGlow)"/>
      <path d="M 100 450 Q 280 420 400 460 T 620 400" stroke="url(#streakGrad)" strokeWidth={8} fill="none" opacity={0.35} filter="url(#softGlow)"/>
      {BOKEH.map((b,i) => <circle key={i} cx={b.x} cy={b.y} r={b.r} fill={BLUE_LIGHT} opacity={b.o}/>)}
      {sortedFaces.map(({indices},fi) => {
        const pts = indices.map(i => verts2d[i]);
        const d = pts.map((p,i) => `${i===0?"M":"L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ")+" Z";
        const avgZ = indices.reduce((s,i)=>s+verts2d[i][2],0)/indices.length;
        return <path key={fi} d={d} fill={`rgba(96,165,250,${Math.min(0.22,0.06+(avgZ+2)*0.05)})`} stroke="rgba(147,197,253,0.25)" strokeWidth={0.5}/>;
      })}
      {EDGES.map(([a,b],i) => <line key={i} x1={verts2d[a][0]} y1={verts2d[a][1]} x2={verts2d[b][0]} y2={verts2d[b][1]} stroke="#FFF" strokeWidth={2} opacity={0.92} filter="url(#edgeGlow)"/>)}
      {verts2d.map(([x,y],i) => <circle key={i} cx={x} cy={y} r={4.5} fill="#FFF" stroke={BLUE_LIGHT} strokeWidth={1} filter="url(#edgeGlow)"/>)}
      {[0,1,2].map(i => <path key={i} d={`M 80 ${500+i*12} Q 220 ${488+i*10} 360 ${496+i*12} T 600 ${502+i*12}`} fill="none" stroke={BLUE_LIGHT} strokeWidth={1.2-i*0.25} opacity={0.3-i*0.07} filter="url(#softGlow)"/>)}
    </svg>
  );
};

