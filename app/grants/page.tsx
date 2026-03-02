"use client";

import * as React from "react";
import { GRANTS } from "@/data/grants";
import type { GrantItem } from "@/data/grants";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Modal } from "@/components/ui/modal";
import { formatGBP } from "@/lib/utils";
import { ArrowUpRight, Filter, Globe2, Sparkles, Tag, Building2, Calendar, Coins, Info } from "lucide-react";

function unique<T>(arr: T[]) {
  return Array.from(new Set(arr)).sort() as T[];
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

function GrantCard({ g, onOpen }: { g: GrantItem; onOpen: (g: GrantItem) => void }) {
  return (
    <button
      onClick={() => onOpen(g)}
      className="text-left rounded-[26px] border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-500/40"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className="truncate text-sm font-semibold text-white/90">{g.name}</div>
            <Badge variant="red">{g.category}</Badge>
          </div>
          <div className="mt-1 text-xs text-white/55">{g.provider} • {g.region}</div>
        </div>

        <div className="text-right">
          <div className="text-sm font-semibold text-crimson-200">
            {g.maxAmountGBP ? formatGBP(g.maxAmountGBP) : "—"}
          </div>
          <div className="mt-1 text-xs text-white/55">{g.deadline}</div>
        </div>
      </div>

      <p className="mt-3 text-sm text-white/65 line-clamp-3">{g.summary}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Pill><Tag className="mr-1 h-3.5 w-3.5" /> {g.fundingType}</Pill>
        <Pill><Sparkles className="mr-1 h-3.5 w-3.5" /> {g.stage}</Pill>
        <Pill><Globe2 className="mr-1 h-3.5 w-3.5" /> {g.region}</Pill>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {g.tags.slice(0, 4).map((t) => <Badge key={t}>{t}</Badge>)}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="text-xs text-white/45">ID: {g.id}</div>
        <div className="inline-flex items-center gap-2 text-xs text-white/60">
          <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1">Click for details</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </button>
  );
}

export default function GrantsPage() {
  const categories = unique(GRANTS.map((g) => g.category));
  const regions = unique(GRANTS.map((g) => g.region));
  const stages = unique(GRANTS.map((g) => g.stage));
  const fundingTypes = unique(GRANTS.map((g) => g.fundingType));

  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState("All");
  const [region, setRegion] = React.useState("All");
  const [stage, setStage] = React.useState("All");
  const [type, setType] = React.useState("All");
  const [sort, setSort] = React.useState<"relevance" | "amount" | "newest">("relevance");

  const [selected, setSelected] = React.useState<GrantItem | null>(null);

  const filtered = React.useMemo(() => {
    const term = q.trim().toLowerCase();

    let list = GRANTS.filter((g) => {
      const okTerm =
        !term ||
        g.name.toLowerCase().includes(term) ||
        g.provider.toLowerCase().includes(term) ||
        g.summary.toLowerCase().includes(term) ||
        g.tags.join(" ").toLowerCase().includes(term);

      return (
        okTerm &&
        (cat === "All" || g.category === cat) &&
        (region === "All" || g.region === region) &&
        (stage === "All" || g.stage === stage) &&
        (type === "All" || g.fundingType === type)
      );
    });

    if (sort === "amount") list = list.sort((a, b) => (b.maxAmountGBP ?? 0) - (a.maxAmountGBP ?? 0));
    if (sort === "newest") list = list.slice().reverse();

    return list;
  }, [q, cat, region, stage, type, sort]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold tracking-tight">Grants</h2>
            <Badge variant="red" className="gap-1.5"><Filter className="h-3.5 w-3.5" /> Search & filter</Badge>
          </div>
          <p className="mt-1 text-sm text-white/65">
            Replace the sample dataset in <span className="kbd">data/grants.ts</span> with real programs (UK + US + SG + Dubai + Malta + China).
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => { setQ(""); setCat("All"); setRegion("All"); setStage("All"); setType("All"); setSort("relevance"); }}
          >
            Reset
          </Button>
          <Button onClick={() => window.scrollTo({ top: 99999, behavior: "smooth" })}>Jump to results</Button>
        </div>
      </div>

      <Card>
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Web3</Badge><Badge>AI</Badge><Badge>Government</Badge><Badge>Innovation</Badge><Badge>Accelerators</Badge>
          </div>

          <div className="grid gap-3 md:grid-cols-5">
            <div className="md:col-span-2">
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, provider, tags…" />
            </div>

            <Select value={cat} onChange={(e) => setCat(e.target.value)}>
              <option value="All">All categories</option>
              {categories.map((x) => <option key={x} value={x}>{x}</option>)}
            </Select>

            <Select value={region} onChange={(e) => setRegion(e.target.value)}>
              <option value="All">All regions</option>
              {regions.map((x) => <option key={x} value={x}>{x}</option>)}
            </Select>

            <Select value={sort} onChange={(e) => setSort(e.target.value as any)}>
              <option value="relevance">Sort: relevance</option>
              <option value="amount">Sort: max amount</option>
              <option value="newest">Sort: newest</option>
            </Select>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <Select value={stage} onChange={(e) => setStage(e.target.value)}>
              <option value="All">All stages</option>
              {stages.map((x) => <option key={x} value={x}>{x}</option>)}
            </Select>

            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="All">All funding types</option>
              {fundingTypes.map((x) => <option key={x} value={x}>{x}</option>)}
            </Select>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70">
              Showing <span className="font-semibold text-white">{filtered.length}</span> results
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((g) => <GrantCard key={g.id} g={g} onOpen={setSelected} />)}
          </div>
        </CardContent>
      </Card>

      <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-7">
        <div className="text-base font-semibold">Make it real in 5 minutes</div>
        <p className="mt-2 text-sm text-white/65">
          Swap the sample grants for real ones, add links, and keep it curated. A tight database beats a noisy list.
        </p>
      </div>

      <Modal
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        title={selected ? selected.name : "Details"}
      >
        {selected ? (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="red">{selected.category}</Badge>
              <Badge>{selected.region}</Badge>
              <Badge>{selected.stage}</Badge>
              <Badge>{selected.fundingType}</Badge>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-2 text-xs text-white/55">
                  <Building2 className="h-4 w-4" /> Provider
                </div>
                <div className="mt-1 text-sm font-semibold text-white/90">{selected.provider}</div>
              </div>

              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-2 text-xs text-white/55">
                  <Calendar className="h-4 w-4" /> Deadline
                </div>
                <div className="mt-1 text-sm font-semibold text-white/90">{selected.deadline}</div>
              </div>

              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-2 text-xs text-white/55">
                  <Coins className="h-4 w-4" /> Funding range
                </div>
                <div className="mt-1 text-sm font-semibold text-white/90">
                  {selected.minAmountGBP ? formatGBP(selected.minAmountGBP) : "—"} — {selected.maxAmountGBP ? formatGBP(selected.maxAmountGBP) : "—"}
                </div>
              </div>

              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-2 text-xs text-white/55">
                  <Info className="h-4 w-4" /> Notes
                </div>
                <div className="mt-1 text-sm text-white/75">{selected.notes ?? "—"}</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink-950/40 p-4">
              <div className="text-xs text-white/55">Summary</div>
              <div className="mt-2 text-sm text-white/80">{selected.summary}</div>
            </div>

            <div className="flex flex-wrap gap-2">
              {selected.tags.map((t) => <Badge key={t}>{t}</Badge>)}
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setSelected(null)}>Close</Button>
              <Button onClick={() => setSelected(null)} className="gap-2">
                Shortlist <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
