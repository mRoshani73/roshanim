/**
 * Obsidian Aurora Landscape Sanctuary — Interactive Script
 * Architecture: Pure Vanilla JavaScript, Zero build dependencies, 100% browser native
 */

// Sanctuary Pavilions Data
const SANCTUARY_DATA = [
  {
    id: 'obsidian-monolith',
    name: 'The Obsidian Monolith',
    category: 'glacial-ridge',
    categoryLabel: 'Glacial Ridge',
    coordinates: "68°21'44\"N · 14°12'19\"E",
    elevation: '840m ASL',
    capacity: '2 Guests',
    pricePerNight: 850,
    skyView: '360° Unobstructed Zenith',
    acousticIsolation: '-46 dB',
    shortDescription: 'Perched upon a jagged basalt escarpment, clad in vitrified volcanic stone with panoramic floor-to-ceiling electrochromic crystal glass.',
    description: 'The Obsidian Monolith is carved into the ancient ridge of Lofoten. Designed as a contemplation vessel, its obsidian-tinted structural glass reflects the midnight twilight while insulating against Arctic winds. Features a private geothermal plunge basin and an integrated Meade 14-inch optical catadioptric telescope aligned to the celestial pole.',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
    fallbackGrad: 'linear-gradient(135deg, #09121d 0%, #10262c 50%, #061118 100%)',
    specs: {
      area: '92 m² / 990 sq ft',
      construction: 'Vitrified Basalt & Quadruple-Pane Low-E Quartz',
      heating: 'Closed-Loop Deep Geothermal Radiant Floor',
      stargazingDeck: 'Heated Basalt Terrace with Recessed Loungers',
      amenities: ['Optical Telescope', 'Cedar Soaking Tub', 'Curatorial Library', 'Thermal Snowsuits', 'Artisanal Nordic Hearth']
    }
  },
  {
    id: 'boreal-prism',
    name: 'Boreal Prism Pavilion',
    category: 'alpine-dome',
    categoryLabel: 'Alpine Dome',
    coordinates: "68°19'12\"N · 14°18'05\"E",
    elevation: '620m ASL',
    capacity: '2–3 Guests',
    pricePerNight: 720,
    skyView: 'Geodesic Hemispherical Zenith',
    acousticIsolation: '-42 dB',
    shortDescription: 'A faceted geodesic sanctuary crafted from faceted dark titanium ribs and ultra-clear laminated glass, offering an unshielded view of the dancing lights.',
    description: 'Elevated on delicate carbon-fiber pilings above untouched sub-arctic tundra, Boreal Prism captures the auroral curtain directly overhead. The interior features curved Finnish birch joinery and an acoustic isolation chamber tuned to glacial frequencies.',
    image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=1200&q=80',
    fallbackGrad: 'linear-gradient(135deg, #07191d 0%, #0c2b29 50%, #06141b 100%)',
    specs: {
      area: '78 m² / 840 sq ft',
      construction: 'Facet-Engineered Titanium & Laminated Acoustic Crystal',
      heating: 'Biomass Pellet Hydronic Loop + Radiant Quartz',
      stargazingDeck: 'Cantilevered Suspended Observation Nest',
      amenities: ['Star Chart Projection', 'Private Dry Sauna', 'Botanical Tea Dispensary', 'High-Gain Audio Hydrophone', 'Pillow Menu']
    }
  },
  {
    id: 'siren-fjord-haven',
    name: 'Siren Fjord Haven',
    category: 'fjord-edge',
    categoryLabel: 'Fjord Edge',
    coordinates: "68°14'50\"N · 14°09'30\"E",
    elevation: '12m ASL',
    capacity: '4 Guests',
    pricePerNight: 980,
    skyView: 'Water-Reflected Polar Arch',
    acousticIsolation: '-48 dB',
    shortDescription: 'Directly kissing the glassy waters of a secluded glacial fjord, reflecting aurora borealis ripples across the obsidian floor.',
    description: 'Resting on granite bedrock at the fjord waterline, Siren Fjord Haven frames dual spectacles: the celestial auroral ribbons above and their mirrored dancing reflections across black Arctic seawater. Includes a private dock with nocturnal sea kayak gear and marine hydrophone listening station.',
    image: 'https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?auto=format&fit=crop&w=1200&q=80',
    fallbackGrad: 'linear-gradient(135deg, #081120 0%, #0b1e33 50%, #050b14 100%)',
    specs: {
      area: '135 m² / 1450 sq ft',
      construction: 'Blackened Larch Timber, Slate & Marine Glazing',
      heating: 'Seawater Heat Pump + Open Soapstone Fireplace',
      stargazingDeck: 'Over-Water Granite Cantilever with Sea Steps',
      amenities: ['Twin Sea Kayaks', 'Sub-Surface Fjord Illuminator', 'Chef Station', 'Private Cedar Sauna', 'Acoustic Sound Bath']
    }
  },
  {
    id: 'basalt-cavern',
    name: 'Basalt Cavern Shelter',
    category: 'basalt-cavern',
    categoryLabel: 'Basalt Cavern',
    coordinates: "68°23'01\"N · 14°22'40\"E",
    elevation: '410m ASL',
    capacity: '2 Guests',
    pricePerNight: 640,
    skyView: 'Framed Chasm Aperture',
    acousticIsolation: '-52 dB',
    shortDescription: 'Tucked within a natural volcanic cleft, providing deep primordial warmth and a dramatic vertical light portal.',
    description: 'Embedded directly into ancient columnar basalt formations, this shelter offers unprecedented thermal stability and acoustic silence. The master sleeping suite rests beneath an angled skylight aperture capturing auroral surges like a living skylight painting.',
    image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1200&q=80',
    fallbackGrad: 'linear-gradient(135deg, #120f18 0%, #201726 50%, #0c0812 100%)',
    specs: {
      area: '68 m² / 730 sq ft',
      construction: 'Native Columnar Basalt & Cast Smoked Glass',
      heating: 'Geothermal Thermal Mass Storage',
      stargazingDeck: 'Cleft Outlook with Shielded Firepit',
      amenities: ['Volcanic Mineral Soak', 'Vinyl Listening Station', 'Curated Art Collection', 'Down Bedding', 'Espresso Bar']
    }
  },
  {
    id: 'glacial-solitude',
    name: 'Glacial Solitude Eyrie',
    category: 'glacial-ridge',
    categoryLabel: 'Glacial Ridge',
    coordinates: "68°25'18\"N · 14°16'55\"E",
    elevation: '1,050m ASL',
    capacity: '2 Guests',
    pricePerNight: 1100,
    skyView: 'Sublime Horizon-to-Horizon Zenith',
    acousticIsolation: '-50 dB',
    shortDescription: 'Accessible exclusively via tracked snowcat or helicopter, standing sentinel at the boundary of the permanent blue ice sheet.',
    description: 'The highest elevation sanctuary in the archipelago. Suspended on aerodynamic struts above moraine fields, Glacial Solitude offers silence broken only by the crack of distant ice. Unrivaled 360-degree viewing of coronal auroral discharges.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    fallbackGrad: 'linear-gradient(135deg, #091724 0%, #112d38 50%, #06111a 100%)',
    specs: {
      area: '88 m² / 950 sq ft',
      construction: 'Aerospace Composite Shell & Electrically Heated Glass',
      heating: 'Triple-Redundant Closed Loop Geothermal & Fuel Cell',
      stargazingDeck: '360° Heated Walkway with Windbreak Shields',
      amenities: ['Dedicated Sanctuary Concierge', 'Helipad Access', 'Thermal Observation Suits', 'Deep Sky Camera Rig', 'Champagne Cellar']
    }
  },
  {
    id: 'alpine-dome-zenith',
    name: 'Zenith Glass Sanctum',
    category: 'alpine-dome',
    categoryLabel: 'Alpine Dome',
    coordinates: "68°17'33\"N · 14°25'10\"E",
    elevation: '510m ASL',
    capacity: '2 Guests',
    pricePerNight: 780,
    skyView: 'Full Optical Glass Ellipsoid',
    acousticIsolation: '-44 dB',
    shortDescription: 'A continuous curved teardrop of crystal glass emerging organically from a lichen-covered granite knoll.',
    description: 'Combining minimalist Scandinavian interiors with transparent structural glass envelopes, the Zenith Glass Sanctum dissolves all boundaries between the guest and the Arctic wilderness. Recline in custom ergonomic lounge pods while solar storm particles ignite the upper atmosphere above.',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80',
    fallbackGrad: 'linear-gradient(135deg, #0a1b24 0%, #103033 50%, #081419 100%)',
    specs: {
      area: '74 m² / 795 sq ft',
      construction: 'Curved Structural Glass Ribs & Local Granite Plinth',
      heating: 'Radiant Basalt Hearth & Heat Recovery Ventilation',
      stargazingDeck: 'Granite Meditation Platform with Wind Shield',
      amenities: ['Custom Organic Mattress', 'Stargazing Audio Guide', 'Private Steam Bath', 'Night-Sky Binoculars', 'Nordic Breakfast Hamper']
    }
  }
];

// Curatorial Archive Specimens Data
const ARCHIVE_SPECIMENS = [
  {
    id: 'ACC-2026-08',
    title: 'Vitrified Obsidian Glass Sample #08',
    category: 'Geological Specimen',
    date: 'Formed ~3.2M BP',
    dimensions: '18.4 × 12.1 × 6.8 cm',
    provenance: 'Lofoten Volcanic Rift Zone · Basalt Ridge Sector IV',
    description: 'Naturally vitrified volcanic glass displaying deep smoky translucency and conchoidal fracture patterns. Found embedded in the bedrock underlying Pavilion 01.'
  },
  {
    id: 'ACC-2026-14',
    title: 'Glacial Core Ice Inclusions',
    category: 'Cryospheric Artifact',
    date: 'Drilled Depth: 142m · Age: 8,400 BP',
    dimensions: 'Cylindrical Core: 7.5 cm ⌀ × 45 cm',
    provenance: 'Svartisen Ice Cap Margin · Sanctuary Research Borehole',
    description: 'Contains trapped atmospheric gases from the early Holocene epoch, revealing atmospheric CO2 concentrations and pristine volcanic ash particles from prehistoric Icelandic eruptions.'
  },
  {
    id: 'ACC-2026-22',
    title: 'Atmospheric Ionization Spectrum Map',
    category: 'Astrophysical Data Plate',
    date: 'Recorded: October 2026 Solstice Surge',
    dimensions: 'High-Resolution Spectral Photometer Print (60 × 90 cm)',
    provenance: 'Obsidian Observatory Spectrometer Rig #2',
    description: 'Spectroscopic wavelength breakdown identifying atomic oxygen emission ribbons at 557.7 nm (ethereal emerald green) and molecular nitrogen emissions at 670.0 nm (canyon crimson).'
  },
  {
    id: 'ACC-2026-31',
    title: 'Arctic Crustose Lichen Specimen (Rhizocarpon geographicum)',
    category: 'Botanical Record',
    date: 'Specimen Age: Est. 640 Years',
    dimensions: 'Granite Substrate Fragment (15 × 15 cm)',
    provenance: 'Alpine Scree Elevation 920m',
    description: 'Extremely slow-growing epilithic lichen indicating uninterrupted environmental purity and pristine air quality throughout six centuries of Arctic exposure.'
  }
];

// Hourly Celestial Timeline Data (20:00 to 06:00)
const CELESTIAL_TIMELINE = [
  {
    time: '20:00',
    intensity: 'Low',
    kp: '3.2',
    solarWind: '410 km/s',
    label: 'Astronomical Twilight',
    phenomena: 'First stars crystallize; faint teal horizon band forms over northern quadrant.',
    skyHueEmerald: 0.15,
    skyHueTeal: 0.2
  },
  {
    time: '21:30',
    intensity: 'Moderate',
    kp: '4.4',
    solarWind: '445 km/s',
    label: 'Diffuse Auroral Arc',
    phenomena: 'A steady emerald green ribbon spans east-to-west across the Arctic fjord.',
    skyHueEmerald: 0.35,
    skyHueTeal: 0.3
  },
  {
    time: '23:00',
    intensity: 'High',
    kp: '5.8',
    solarWind: '492 km/s',
    label: 'Rayed Bands & Pulsations',
    phenomena: 'Vertical ray curtains begin dancing; rapid chromatic wave motion visible to naked eye.',
    skyHueEmerald: 0.7,
    skyHueTeal: 0.55
  },
  {
    time: '00:30',
    intensity: 'Peak Coronal',
    kp: '6.4',
    solarWind: '535 km/s',
    label: 'Corona Zenith Discharge',
    phenomena: 'Auroral curtains converge directly overhead into a pulsing violet-emerald corona.',
    skyHueEmerald: 0.95,
    skyHueTeal: 0.85
  },
  {
    time: '02:00',
    intensity: 'High',
    kp: '5.5',
    solarWind: '488 km/s',
    label: 'Secondary Wavefront',
    phenomena: 'Wide pulsating emerald patches illuminate the snowy jagged peaks and mirrored fjord waters.',
    skyHueEmerald: 0.65,
    skyHueTeal: 0.5
  },
  {
    time: '03:45',
    intensity: 'Moderate',
    kp: '4.2',
    solarWind: '430 km/s',
    label: 'Morning Twilight Transition',
    phenomena: 'Diffuse glowing patches slowly fade as deep indigo pre-dawn light touches the horizon.',
    skyHueEmerald: 0.3,
    skyHueTeal: 0.25
  },
  {
    time: '05:30',
    intensity: 'Low',
    kp: '3.0',
    solarWind: '395 km/s',
    label: 'Nautical Dawn',
    phenomena: 'Obsidian silhouettes sharpen against pastel ice-blue twilight; Venus brilliant in southeast.',
    skyHueEmerald: 0.1,
    skyHueTeal: 0.1
  }
];

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initAuroraCanvas();
  initTelemetryClock();
  initPavilionGallery();
  initCelestialObservatory();
  initArchiveModal();
  initReservationCalculator();
  initMobileNavigation();
  initSoundscapeSynthesizer();
});

/* ==========================================================================
   1. Interactive Aurora & Celestial Background Canvas
   ========================================================================== */
function initAuroraCanvas() {
  const canvas = document.getElementById('aurora-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let animationFrameId;

  // Star Field
  const stars = [];
  const STAR_COUNT = 180;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initStars();
  }

  function initStars() {
    stars.length = 0;
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.75),
        radius: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2
      });
    }
  }

  window.addEventListener('resize', resize);
  resize();

  let time = 0;
  let intensityFactor = 1.0;

  // Expose function to modulate intensity from observatory
  window.setAuroraVisualIntensity = (factor) => {
    intensityFactor = factor;
  };

  function render() {
    time += 0.008;
    ctx.clearRect(0, 0, width, height);

    // Render subtle twinkling stars
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      const brightness = s.alpha + Math.sin(time * 60 * s.twinkleSpeed + s.twinklePhase) * 0.25;
      ctx.fillStyle = `rgba(240, 245, 255, ${Math.max(0.1, Math.min(1, brightness))})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Render Aurora Ribbon Waves using layered sine waves
    const ribbons = [
      { yOffset: height * 0.18, amp: 45, freq: 0.0015, speed: 0.006, color: 'rgba(16, 185, 129,', maxAlpha: 0.16 * intensityFactor },
      { yOffset: height * 0.26, amp: 60, freq: 0.0018, speed: 0.008, color: 'rgba(45, 212, 191,', maxAlpha: 0.22 * intensityFactor },
      { yOffset: height * 0.34, amp: 50, freq: 0.0022, speed: 0.005, color: 'rgba(16, 185, 129,', maxAlpha: 0.14 * intensityFactor },
      { yOffset: height * 0.12, amp: 35, freq: 0.0012, speed: 0.009, color: 'rgba(147, 197, 253,', maxAlpha: 0.08 * intensityFactor }
    ];

    ribbons.forEach((ribbon, index) => {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height);

      // Draw flowing wave curve
      for (let x = 0; x <= width; x += 15) {
        const wave1 = Math.sin(x * ribbon.freq + time * ribbon.speed * 200 + index) * ribbon.amp;
        const wave2 = Math.cos(x * ribbon.freq * 0.6 - time * ribbon.speed * 150) * (ribbon.amp * 0.4);
        const y = ribbon.yOffset + wave1 + wave2;
        if (x === 0) {
          ctx.lineTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.lineTo(width, height);
      ctx.closePath();

      // Create vertical atmospheric fade
      const grad = ctx.createLinearGradient(0, ribbon.yOffset - ribbon.amp * 1.5, 0, ribbon.yOffset + ribbon.amp * 3);
      grad.addColorStop(0, `${ribbon.color} 0)`);
      grad.addColorStop(0.3, `${ribbon.color} ${ribbon.maxAlpha})`);
      grad.addColorStop(0.7, `${ribbon.color} ${ribbon.maxAlpha * 0.5})`);
      grad.addColorStop(1, `${ribbon.color} 0)`);

      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    });

    animationFrameId = requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. Live Simulated Telemetry Clock & Atmospheric Readings
   ========================================================================== */
function initTelemetryClock() {
  const clockEl = document.getElementById('telemetry-clock');
  const tempEl = document.getElementById('telemetry-temp');
  const kpEl = document.getElementById('telemetry-kp');
  const windEl = document.getElementById('telemetry-wind');

  function updateReadings() {
    const now = new Date();
    // UTC Arctic Sanctuary Time
    const hrs = String(now.getUTCHours()).padStart(2, '0');
    const mins = String(now.getUTCMinutes()).padStart(2, '0');
    const secs = String(now.getUTCSeconds()).padStart(2, '0');
    if (clockEl) {
      clockEl.textContent = `${hrs}:${mins}:${secs} UTC`;
    }

    // Micro fluctuations for realistic environmental sensor telemetry
    if (tempEl && Math.random() > 0.7) {
      const baseTemp = -4.3;
      const jitter = (Math.random() * 0.4 - 0.2).toFixed(1);
      tempEl.textContent = `${(baseTemp + parseFloat(jitter)).toFixed(1)}°C`;
    }

    if (windEl && Math.random() > 0.8) {
      const baseWind = 488;
      const jitter = Math.floor(Math.random() * 8 - 4);
      windEl.textContent = `${baseWind + jitter} km/s`;
    }
  }

  updateReadings();
  setInterval(updateReadings, 1000);
}

/* ==========================================================================
   3. Sanctuary Pavilions Showcase & Modal Inspection
   ========================================================================== */
function initPavilionGallery() {
  const galleryContainer = document.getElementById('pavilion-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (!galleryContainer) return;

  function renderCards(filter = 'all') {
    galleryContainer.innerHTML = '';
    const filtered = filter === 'all' 
      ? SANCTUARY_DATA 
      : SANCTUARY_DATA.filter(item => item.category === filter);

    filtered.forEach(pavilion => {
      const card = document.createElement('article');
      card.className = 'glass-card flex flex-col group';
      card.setAttribute('data-id', pavilion.id);

      card.innerHTML = `
        <div class="relative h-64 overflow-hidden img-fallback-container" style="background: ${pavilion.fallbackGrad};">
          <img 
            src="${pavilion.image}" 
            alt="${pavilion.name}" 
            loading="lazy" 
            referrerpolicy="no-referrer"
            onerror="this.style.display='none'"
          />
          <div class="absolute inset-0 media-gradient-scrim"></div>
          
          <div class="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span class="telemetry-node">
              <span class="telemetry-dot"></span>
              <span>${pavilion.coordinates}</span>
            </span>
            <span class="text-xs font-mono px-2 py-1 rounded bg-black/50 text-slate-300 border border-white/10 backdrop-blur-md">
              ${pavilion.elevation}
            </span>
          </div>

          <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
            <span>${pavilion.categoryLabel}</span>
            <span>·</span>
            <span>${pavilion.capacity}</span>
            <span>·</span>
            <span class="font-mono text-emerald-300 font-medium">€${pavilion.pricePerNight} <span class="text-slate-400 font-normal">/ night</span></span>
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-editorial font-medium text-white group-hover:text-emerald-300 transition-colors">
              ${pavilion.name}
            </h3>
            <p class="text-sm text-slate-400 mt-2 line-clamp-2">
              ${pavilion.shortDescription}
            </p>

            <div class="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5 text-xs text-slate-300 font-mono">
              <div>
                <span class="text-slate-500 block text-[10px] uppercase tracking-wider">Sky View</span>
                <span>${pavilion.skyView}</span>
              </div>
              <div>
                <span class="text-slate-500 block text-[10px] uppercase tracking-wider">Acoustic Floor</span>
                <span>${pavilion.acousticIsolation}</span>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
            <button 
              type="button" 
              class="btn-glass flex-1 text-xs py-2 inspect-pavilion-btn" 
              data-id="${pavilion.id}"
            >
              Inspect Architectural Specs
            </button>
            <button 
              type="button" 
              class="btn-primary-aurora text-xs py-2 px-3 quick-book-btn" 
              data-id="${pavilion.id}"
              title="Select for Reservation"
            >
              Reserve
            </button>
          </div>
        </div>
      `;

      galleryContainer.appendChild(card);
    });

    // Attach click listeners for card buttons
    galleryContainer.querySelectorAll('.inspect-pavilion-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openPavilionModal(id);
      });
    });

    galleryContainer.querySelectorAll('.quick-book-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        selectPavilionForBooking(id);
      });
    });
  }

  // Filter tab events
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderCards(filterValue);
    });
  });

  // Initial render
  renderCards('all');

  // Modal inspection setup
  const modal = document.getElementById('pavilion-modal');
  const modalClose = document.getElementById('modal-close-btn');

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

function openPavilionModal(pavilionId) {
  const pavilion = SANCTUARY_DATA.find(p => p.id === pavilionId);
  const modal = document.getElementById('pavilion-modal');
  const body = document.getElementById('modal-body-content');
  if (!pavilion || !modal || !body) return;

  body.innerHTML = `
    <div class="relative h-72 md:h-80 w-full overflow-hidden rounded-t-xl" style="background: ${pavilion.fallbackGrad}">
      <img 
        src="${pavilion.image}" 
        alt="${pavilion.name}" 
        class="w-full h-full object-cover" 
        referrerpolicy="no-referrer"
        onerror="this.style.display='none'"
      />
      <div class="absolute inset-0 media-gradient-scrim"></div>
      
      <div class="absolute bottom-6 left-6 right-6">
        <div class="flex items-center gap-2 text-xs text-emerald-300 font-mono mb-1">
          <span>${pavilion.categoryLabel}</span>
          <span>·</span>
          <span>${pavilion.coordinates}</span>
          <span>·</span>
          <span>${pavilion.elevation}</span>
        </div>
        <h2 class="text-2xl md:text-3xl font-editorial font-medium text-white">
          ${pavilion.name}
        </h2>
      </div>
    </div>

    <div class="p-6 md:p-8 space-y-6">
      <div class="space-y-3">
        <h4 class="label-caps text-slate-400">Curatorial Overview</h4>
        <p class="text-slate-300 leading-relaxed font-light text-base">
          ${pavilion.description}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
        <div class="space-y-3">
          <h4 class="label-caps text-slate-400">Architectural & Acoustic Telemetry</h4>
          <dl class="space-y-2 text-xs font-mono">
            <div class="flex justify-between py-1 border-b border-white/5">
              <dt class="text-slate-500">Total Enclosed Area</dt>
              <dd class="text-slate-200">${pavilion.specs.area}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-white/5">
              <dt class="text-slate-500">Structural Assembly</dt>
              <dd class="text-slate-200 text-right max-w-[200px]">${pavilion.specs.construction}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-white/5">
              <dt class="text-slate-500">Sub-Arctic Thermal Cycle</dt>
              <dd class="text-slate-200 text-right max-w-[200px]">${pavilion.specs.heating}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-white/5">
              <dt class="text-slate-500">Acoustic Isolation Index</dt>
              <dd class="text-emerald-400">${pavilion.acousticIsolation}</dd>
            </div>
          </dl>
        </div>

        <div class="space-y-3">
          <h4 class="label-caps text-slate-400">Sanctuary Amenities</h4>
          <ul class="space-y-2 text-xs text-slate-300">
            ${pavilion.specs.amenities.map(a => `
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                <span>${a}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div class="p-4 rounded-lg bg-emerald-950/20 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span class="text-xs text-slate-400 block font-mono">Curatorial Night Rate</span>
          <span class="text-xl font-mono text-emerald-300 font-medium">€${pavilion.pricePerNight} <span class="text-xs text-slate-400 font-normal">/ night (inclusive of observatory pass)</span></span>
        </div>
        <button 
          type="button" 
          id="modal-book-direct-btn"
          class="btn-primary-aurora w-full sm:w-auto"
        >
          Select for Sanctuary Pass
        </button>
      </div>
    </div>
  `;

  document.getElementById('modal-book-direct-btn')?.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    selectPavilionForBooking(pavilion.id);
  });

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectPavilionForBooking(id) {
  const selectEl = document.getElementById('calc-pavilion');
  if (selectEl) {
    selectEl.value = id;
    selectEl.dispatchEvent(new Event('change'));
  }
  const target = document.getElementById('reservations');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   4. Celestial Observatory & Timeline Scrubber
   ========================================================================== */
function initCelestialObservatory() {
  const slider = document.getElementById('celestial-time-slider');
  const timeDisplay = document.getElementById('observatory-time-display');
  const kpDisplay = document.getElementById('observatory-kp-display');
  const intensityDisplay = document.getElementById('observatory-intensity-display');
  const labelDisplay = document.getElementById('observatory-phenomena-label');
  const descDisplay = document.getElementById('observatory-phenomena-desc');
  const glowRing = document.getElementById('observatory-glow-ring');

  if (!slider) return;

  function updateTimeline(index) {
    const data = CELESTIAL_TIMELINE[index];
    if (!data) return;

    if (timeDisplay) timeDisplay.textContent = data.time;
    if (kpDisplay) kpDisplay.textContent = `Kp ${data.kp}`;
    if (intensityDisplay) {
      intensityDisplay.textContent = data.intensity;
      intensityDisplay.className = `font-mono text-xs px-2 py-0.5 rounded ${
        data.intensity.includes('Peak') 
          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
          : 'bg-teal-500/10 text-teal-300 border border-teal-500/20'
      }`;
    }
    if (labelDisplay) labelDisplay.textContent = data.label;
    if (descDisplay) descDisplay.textContent = data.phenomena;

    // Modulate background canvas intensity
    if (window.setAuroraVisualIntensity) {
      window.setAuroraVisualIntensity(data.skyHueEmerald * 1.4);
    }

    if (glowRing) {
      glowRing.style.boxShadow = `0 0 60px ${data.skyHueEmerald * 40}px rgba(16, 185, 129, ${data.skyHueEmerald * 0.4})`;
    }
  }

  slider.addEventListener('input', (e) => {
    updateTimeline(parseInt(e.target.value, 10));
  });

  // Default to peak time index 3 (00:30 Corona)
  slider.value = 3;
  updateTimeline(3);
}

/* ==========================================================================
   5. Curatorial Nocturnal Archive Specimen Modal
   ========================================================================== */
function initArchiveModal() {
  const archiveContainer = document.getElementById('archive-grid');
  if (!archiveContainer) return;

  archiveContainer.innerHTML = '';

  ARCHIVE_SPECIMENS.forEach(specimen => {
    const card = document.createElement('div');
    card.className = 'glass-panel p-6 flex flex-col justify-between hover:border-teal-500/30 cursor-pointer transition-all';
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
          <span>${specimen.id}</span>
          <span>${specimen.category}</span>
        </div>
        <h4 class="font-editorial text-lg text-white font-medium mb-1 hover:text-emerald-300 transition-colors">
          ${specimen.title}
        </h4>
        <p class="text-xs text-slate-400 font-mono mb-3">
          ${specimen.date} · ${specimen.dimensions}
        </p>
        <p class="text-sm text-slate-300 line-clamp-3 font-light leading-relaxed">
          ${specimen.description}
        </p>
      </div>

      <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span class="truncate max-w-[200px] text-slate-500">${specimen.provenance}</span>
        <span class="text-teal-400 group-hover:translate-x-1 transition-transform">Inspect Accession →</span>
      </div>
    `;

    card.addEventListener('click', () => {
      openArchiveDetail(specimen);
    });

    archiveContainer.appendChild(card);
  });
}

function openArchiveDetail(specimen) {
  const modal = document.getElementById('pavilion-modal');
  const body = document.getElementById('modal-body-content');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="p-8 space-y-6">
      <div class="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span class="label-caps text-emerald-400">Archival Exhibition Plate</span>
          <h2 class="text-2xl font-editorial font-medium text-white mt-1">${specimen.title}</h2>
        </div>
        <span class="font-mono text-sm px-3 py-1 rounded bg-black/60 border border-white/10 text-slate-300">
          ${specimen.id}
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-slate-300 bg-black/30 p-4 rounded-lg border border-white/5">
        <div><span class="text-slate-500 block">Classification:</span> ${specimen.category}</div>
        <div><span class="text-slate-500 block">Chronological Origin:</span> ${specimen.date}</div>
        <div><span class="text-slate-500 block">Specimen Dimensions:</span> ${specimen.dimensions}</div>
        <div><span class="text-slate-500 block">Geographic Provenance:</span> ${specimen.provenance}</div>
      </div>

      <div class="space-y-3">
        <h4 class="label-caps text-slate-400">Curatorial Notes & Analysis</h4>
        <p class="text-slate-300 font-light leading-relaxed text-sm">
          ${specimen.description}
        </p>
        <p class="text-slate-400 font-light leading-relaxed text-xs">
          This physical specimen is maintained in our climate-sealed basalt archive repository at -18°C under an inert nitrogen atmosphere to prevent oxidation of delicate mineral coatings.
        </p>
      </div>

      <div class="pt-4 border-t border-white/10 flex justify-end">
        <button type="button" class="btn-glass text-xs" onclick="document.getElementById('pavilion-modal').classList.remove('active'); document.body.style.overflow='';">
          Close Archival Record
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   6. Reservation Pass Calculator & Dynamic Pricing
   ========================================================================== */
function initReservationCalculator() {
  const pavilionSelect = document.getElementById('calc-pavilion');
  const nightsInput = document.getElementById('calc-nights');
  const guestsInput = document.getElementById('calc-guests');
  const addonCheckboxes = document.querySelectorAll('.calc-addon');
  const baseRateEl = document.getElementById('calc-base-rate');
  const subtotalEl = document.getElementById('calc-subtotal');
  const endowmentEl = document.getElementById('calc-endowment');
  const totalEl = document.getElementById('calc-total');
  const bookingForm = document.getElementById('sanctuary-booking-form');
  const confirmationBanner = document.getElementById('booking-confirmation-banner');

  if (!pavilionSelect || !nightsInput) return;

  // Populate pavilion select dropdown
  pavilionSelect.innerHTML = '';
  SANCTUARY_DATA.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = `${p.name} (€${p.pricePerNight}/night · ${p.capacity})`;
    pavilionSelect.appendChild(opt);
  });

  function calculate() {
    const selectedId = pavilionSelect.value;
    const pavilion = SANCTUARY_DATA.find(p => p.id === selectedId) || SANCTUARY_DATA[0];
    const nights = Math.max(1, parseInt(nightsInput.value, 10) || 1);
    const guests = Math.max(1, parseInt(guestsInput.value, 10) || 1);

    let addonTotal = 0;
    addonCheckboxes.forEach(box => {
      if (box.checked) {
        addonTotal += parseInt(box.getAttribute('data-price'), 10) || 0;
      }
    });

    const roomSubtotal = pavilion.pricePerNight * nights;
    const grossTotal = roomSubtotal + (addonTotal * guests);
    const endowment = Math.round(grossTotal * 0.05); // 5% Conservation Endowment
    const finalTotal = grossTotal + endowment;

    if (baseRateEl) baseRateEl.textContent = `€${pavilion.pricePerNight} × ${nights} night${nights > 1 ? 's' : ''}`;
    if (subtotalEl) subtotalEl.textContent = `€${roomSubtotal.toLocaleString()}`;
    if (endowmentEl) endowmentEl.textContent = `€${endowment.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `€${finalTotal.toLocaleString()}`;
  }

  pavilionSelect.addEventListener('change', calculate);
  nightsInput.addEventListener('input', calculate);
  guestsInput.addEventListener('input', calculate);
  addonCheckboxes.forEach(box => box.addEventListener('change', calculate));

  // Initial calculation
  calculate();

  // Handle form submission & generate .ics calendar export
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('guest-name')?.value || 'Sanctuary Guest';
      const guestEmail = document.getElementById('guest-email')?.value || 'guest@example.com';
      const selectedId = pavilionSelect.value;
      const pavilion = SANCTUARY_DATA.find(p => p.id === selectedId) || SANCTUARY_DATA[0];
      const nights = nightsInput.value;
      const totalAmount = totalEl ? totalEl.textContent : '€0';

      // Show confirmation state
      if (confirmationBanner) {
        confirmationBanner.classList.remove('hidden');
        document.getElementById('conf-guest-name').textContent = guestName;
        document.getElementById('conf-pavilion-name').textContent = pavilion.name;
        document.getElementById('conf-nights-count').textContent = `${nights} Nights`;
        document.getElementById('conf-total-rate').textContent = totalAmount;

        confirmationBanner.scrollIntoView({ behavior: 'smooth' });
      }

      // Generate .ics download link
      const icsBtn = document.getElementById('download-ics-btn');
      if (icsBtn) {
        icsBtn.onclick = () => {
          generateIcsFile(pavilion.name, guestName, nights);
        };
      }
    });
  }
}

function generateIcsFile(pavilionName, guestName, nights) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 14); // 2 weeks out
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + parseInt(nights, 10));

  const formatDate = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Obsidian Aurora Landscape Sanctuary//NONSGML v1.0//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART:${formatDate(startDate)}`,
    `DTEND:${formatDate(endDate)}`,
    `SUMMARY:Sanctuary Pass: ${pavilionName}`,
    `DESCRIPTION:Confirmed nocturnal retreat for ${guestName} at Obsidian Aurora Landscape Sanctuary. Coordinates: 68°18'N 14°12'E.`,
    'LOCATION:Obsidian Aurora Sanctuary, Lofoten Arctic Wilderness, Norway',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `Obsidian_Aurora_Sanctuary_Pass.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/* ==========================================================================
   7. Ambient Glacial Soundscape Synthesizer (Pure Web Audio API)
   ========================================================================== */
function initSoundscapeSynthesizer() {
  const toggleBtn = document.getElementById('soundscape-toggle-btn');
  const statusLabel = document.getElementById('soundscape-status-label');
  if (!toggleBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let windGain = null;
  let droneGain = null;
  let osc1 = null;
  let osc2 = null;

  function startAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();

      // Master output limiter
      const master = audioCtx.createGain();
      master.gain.setValueAtTime(0.3, audioCtx.currentTime);
      master.connect(audioCtx.destination);

      // Low glacial resonance drone (65Hz & 97.5Hz fifth interval)
      osc1 = audioCtx.createOscillator();
      osc2 = audioCtx.createOscillator();
      droneGain = audioCtx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(65, audioCtx.currentTime); // C2

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(97.5, audioCtx.currentTime); // G2

      droneGain.gain.setValueAtTime(0.08, audioCtx.currentTime);

      osc1.connect(droneGain);
      osc2.connect(droneGain);
      droneGain.connect(master);

      osc1.start();
      osc2.start();

      // Atmospheric Pink Noise wind filter simulation
      const bufferSize = audioCtx.sampleRate * 2;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Filter noise to sound like whispering polar wind
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, audioCtx.currentTime);

      windGain = audioCtx.createGain();
      windGain.gain.setValueAtTime(0.12, audioCtx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(windGain);
      windGain.connect(master);

      whiteNoise.start();

      isPlaying = true;
      toggleBtn.classList.add('active');
      if (statusLabel) statusLabel.textContent = 'Glacial Resonance Active';
    } catch (err) {
      console.warn('Web Audio not allowed without user interaction', err);
    }
  }

  function stopAudio() {
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
    isPlaying = false;
    toggleBtn.classList.remove('active');
    if (statusLabel) statusLabel.textContent = 'Acoustic Generator Idle';
  }

  toggleBtn.addEventListener('click', () => {
    if (!isPlaying) {
      startAudio();
    } else {
      stopAudio();
    }
  });
}

/* ==========================================================================
   8. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNavigation() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuToggle || !mobileNav) return;

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileNav.classList.toggle('hidden');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
