/**
 * PATRIK FASHION E-COMMERCE — APPLICATION LOGIC & STATE
 */

// ================= PRODUCT DATA =================
const PRODUCTS = [
  // HITS (Хиты продаж)
  {
    id: 'p1',
    title: 'Шерстяное пальто оверсайз',
    category: 'clothing',
    categoryName: 'Верхняя одежда',
    price: 24990,
    oldPrice: 32000,
    badge: 'hit',
    badgeText: 'Хит',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
    description: 'Двубортное пальто свободного силуэта из натуральной итальянской шерсти с добавлением кашемира. Идеальная посадка, акцентные лацканы и глубокие прорезные карманы.',
    sizes: ['46 (S)', '48 (M)', '50 (L)', '52 (XL)'],
    composition: '80% Шерсть Virgin Wool, 20% Кашемир',
    isHit: true,
    isNew: false,
    isSale: true
  },
  {
    id: 'p2',
    title: 'Трикотажный сет из кашемира',
    category: 'clothing',
    categoryName: 'Трикотаж',
    price: 12990,
    oldPrice: null,
    badge: 'new',
    badgeText: 'Новинка',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop',
    description: 'Уютный комплект из мягкого кашемирового свитера свободного кроя и широких трикотажных брюк палаццо. Невероятно приятный к телу материал.',
    sizes: ['XS', 'S', 'M', 'L'],
    composition: '70% Премиальный хлопок, 30% Монгольский кашемир',
    isHit: true,
    isNew: true,
    isSale: false
  },
  {
    id: 'p3',
    title: 'Кожаные ботильоны черные',
    category: 'shoes',
    categoryName: 'Обувь',
    price: 19490,
    oldPrice: 24500,
    badge: 'hit',
    badgeText: 'Хит',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop',
    description: 'Лаконичные ботильоны челси на массивной ультралегкой подошве. Выполнены из гладкой телячьей кожи с водоотталкивающей пропиткой.',
    sizes: ['37', '38', '39', '40', '41'],
    composition: '100% Натуральная кожа теленка, подкладка байка',
    isHit: true,
    isNew: false,
    isSale: true
  },
  {
    id: 'p4',
    title: 'Структурированная кожаная сумка',
    category: 'accessories',
    categoryName: 'Аксессуары',
    price: 16290,
    oldPrice: null,
    badge: 'hit',
    badgeText: 'Бестселлер',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    description: 'Архитектурная сумка тоут благородного коньячного оттенка. Вместительное основное отделение, съемный плечевой ремень и золотистая фурнитура.',
    sizes: ['One Size (34 x 26 см)'],
    composition: '100% Зернистая кожа Nappa',
    isHit: true,
    isNew: false,
    isSale: false
  },

  // NEW ARRIVALS (Новые поступления)
  {
    id: 'p5',
    title: 'Куртка стеганая хаки',
    category: 'clothing',
    categoryName: 'Верхняя одежда',
    price: 14900,
    oldPrice: 18500,
    badge: 'new',
    badgeText: 'Новинка',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
    description: 'Утепленная стеганая куртка оливкового цвета с водоотталкивающей мембраной и инновационным эко-пухом. Идеальный спутник для переменчивой погоды.',
    sizes: ['S', 'M', 'L', 'XL'],
    composition: '100% Нейлон с мембраной, наполнитель DuPont Sorona',
    isHit: false,
    isNew: true,
    isSale: true
  },
  {
    id: 'p6',
    title: 'Кожаные кеды белые',
    category: 'shoes',
    categoryName: 'Обувь',
    price: 11500,
    oldPrice: null,
    badge: 'new',
    badgeText: 'New',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    description: 'Классические минималистичные сникеры из белой кожи со съемной анатомической стелькой с эффектом памяти.',
    sizes: ['38', '39', '40', '41', '42', '43'],
    composition: '100% Премиальная кожа, подошва из натурального каучука',
    isHit: false,
    isNew: true,
    isSale: false
  },
  {
    id: 'p7',
    title: 'Солнцезащитные очки в оправе',
    category: 'accessories',
    categoryName: 'Аксессуары',
    price: 8200,
    oldPrice: 11000,
    badge: 'hit',
    badgeText: 'Trend',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
    description: 'Дизайнерские очки геометрической формы в черепаховой оправе из ацетата Mazzucchelli. Линзы с защитой UV400.',
    sizes: ['One Size'],
    composition: '100% Итальянский био-ацетат, линзы Carl Zeiss',
    isHit: false,
    isNew: true,
    isSale: true
  },
  {
    id: 'p8',
    title: 'Сумка кросс-боди серая',
    category: 'accessories',
    categoryName: 'Аксессуары',
    price: 13490,
    oldPrice: null,
    badge: 'new',
    badgeText: 'Limited',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
    description: 'Компактная и стильная сумка через плечо с акцентной пряжкой. Подходит под любой городской образ.',
    sizes: ['One Size (22 x 15 см)'],
    composition: '100% Натуральная замша и гладкая кожа',
    isHit: false,
    isNew: true,
    isSale: false
  }
];

// ================= APPLICATION STATE =================
class StoreState {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('patrik_cart')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('patrik_wishlist')) || [];
    this.activeFilter = 'all';
    this.promoCode = localStorage.getItem('patrik_promo') || '';
    this.discountPercent = this.getDiscountFromCode(this.promoCode);
  }

  save() {
    localStorage.setItem('patrik_cart', JSON.stringify(this.cart));
    localStorage.setItem('patrik_wishlist', JSON.stringify(this.wishlist));
    localStorage.setItem('patrik_promo', this.promoCode);
    this.renderUI();
  }

  getDiscountFromCode(code) {
    const clean = (code || '').trim().toUpperCase();
    if (clean === 'AUTUMN40' || clean === 'SALE40') return 0.40; // 40% discount
    if (clean === 'PATRIK10' || clean === 'WELCOME10') return 0.10; // 10% discount
    return 0;
  }

  addToCart(productId, size = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const chosenSize = size || product.sizes[0];
    const existing = this.cart.find(item => item.id === productId && item.size === chosenSize);

    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size: chosenSize,
        quantity: 1
      });
    }

    this.save();
    showToast(`Товар "${product.title}" добавлен в корзину!`);
  }

  updateQuantity(productId, size, delta) {
    const item = this.cart.find(i => i.id === productId && i.size === size);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.cart = this.cart.filter(i => !(i.id === productId && i.size === size));
    }
    this.save();
  }

  removeFromCart(productId, size) {
    this.cart = this.cart.filter(i => !(i.id === productId && i.size === size));
    this.save();
    showToast('Товар удален из корзины');
  }

  clearCart() {
    this.cart = [];
    this.save();
  }

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    const product = PRODUCTS.find(p => p.id === productId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      showToast(`"${product.title}" удалено из избранного`);
    } else {
      this.wishlist.push(productId);
      showToast(`"${product.title}" сохранено в избранное!`);
    }
    this.save();
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  applyPromo(code) {
    const discount = this.getDiscountFromCode(code);
    if (discount > 0) {
      this.promoCode = code.toUpperCase();
      this.discountPercent = discount;
      this.save();
      showToast(`Промокод ${this.promoCode} успешно применен (-${discount * 100}%)!`);
      return true;
    } else {
      showToast('Неверный промокод. Попробуйте AUTUMN40 или PATRIK10');
      return false;
    }
  }

  getCartSubtotal() {
    return this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  getDiscountAmount() {
    return Math.round(this.getCartSubtotal() * this.discountPercent);
  }

  getGrandTotal() {
    return Math.max(0, this.getCartSubtotal() - this.getDiscountAmount());
  }

  getCartCount() {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  renderUI() {
    // 1. Update Header Counters
    const cartCountEl = document.getElementById('cartCount');
    const wishlistCountEl = document.getElementById('wishlistCount');
    const cartDrawerCountEl = document.getElementById('cartDrawerCount');
    const wishlistDrawerCountEl = document.getElementById('wishlistDrawerCount');
    const cartTotalPreviewEl = document.getElementById('cartTotalPreview');

    const totalCount = this.getCartCount();
    const wishlistCount = this.wishlist.length;
    const grandTotal = this.getGrandTotal();

    if (cartCountEl) cartCountEl.textContent = totalCount;
    if (wishlistCountEl) wishlistCountEl.textContent = wishlistCount;
    if (cartDrawerCountEl) cartDrawerCountEl.textContent = totalCount;
    if (wishlistDrawerCountEl) wishlistDrawerCountEl.textContent = wishlistCount;
    if (cartTotalPreviewEl) cartTotalPreviewEl.textContent = `${formatPrice(grandTotal)} ₽`;

    // 2. Render Cart Drawer Items
    this.renderCartDrawer();

    // 3. Render Wishlist Drawer Items
    this.renderWishlistDrawer();

    // 4. Update Product Grid Wishlist Heart States
    document.querySelectorAll('.card-action-btn[data-wishlist]').forEach(btn => {
      const pid = btn.getAttribute('data-wishlist');
      if (this.isInWishlist(pid)) {
        btn.classList.add('active');
        btn.innerHTML = `<i data-lucide="heart" style="fill: currentColor;"></i>`;
      } else {
        btn.classList.remove('active');
        btn.innerHTML = `<i data-lucide="heart"></i>`;
      }
    });

    lucide.createIcons();
  }

  renderCartDrawer() {
    const listEl = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotal');
    const discountRowEl = document.getElementById('cartDiscountRow');
    const discountValEl = document.getElementById('cartDiscountValue');
    const grandTotalEl = document.getElementById('cartGrandTotal');
    const shippingProgressEl = document.getElementById('shippingTrackerProgress');
    const shippingTextEl = document.getElementById('shippingTrackerText');
    const promoMsgEl = document.getElementById('promoAppliedMsg');

    if (!listEl) return;

    if (this.cart.length === 0) {
      listEl.innerHTML = `
        <div class="empty-state">
          <i data-lucide="shopping-bag"></i>
          <h4>Ваша корзина пуста</h4>
          <p>Выберите понравившиеся вещи из новой коллекции и добавьте их в корзину.</p>
        </div>
      `;
    } else {
      listEl.innerHTML = this.cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" class="cart-item__img">
          <div class="cart-item__details">
            <h4 class="cart-item__title">${item.title}</h4>
            <span class="cart-item__meta">Размер: ${item.size}</span>
            <div class="cart-item__bottom">
              <div class="cart-item__qty">
                <button class="qty-btn" onclick="appState.updateQuantity('${item.id}', '${item.size}', -1)">-</button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn" onclick="appState.updateQuantity('${item.id}', '${item.size}', 1)">+</button>
              </div>
              <span class="cart-item__price">${formatPrice(item.price * item.quantity)} ₽</span>
              <button class="icon-btn cart-item__remove" onclick="appState.removeFromCart('${item.id}', '${item.size}')">
                <i data-lucide="trash-2"></i>
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }

    const subtotal = this.getCartSubtotal();
    const discount = this.getDiscountAmount();
    const grandTotal = this.getGrandTotal();

    if (subtotalEl) subtotalEl.textContent = `${formatPrice(subtotal)} ₽`;
    if (grandTotalEl) grandTotalEl.textContent = `${formatPrice(grandTotal)} ₽`;

    if (this.discountPercent > 0) {
      if (discountRowEl) discountRowEl.style.display = 'flex';
      if (discountValEl) discountValEl.textContent = `-${formatPrice(discount)} ₽ (${this.discountPercent * 100}%)`;
      if (promoMsgEl) promoMsgEl.textContent = `✓ Применен промокод ${this.promoCode} (-${this.discountPercent * 100}%)`;
    } else {
      if (discountRowEl) discountRowEl.style.display = 'none';
      if (promoMsgEl) promoMsgEl.textContent = '';
    }

    // Shipping Free calculation (5000 RUB threshold)
    const freeShippingTarget = 5000;
    const progress = Math.min(100, Math.round((subtotal / freeShippingTarget) * 100));
    if (shippingProgressEl) shippingProgressEl.style.width = `${progress}%`;

    if (subtotal >= freeShippingTarget) {
      if (shippingTextEl) shippingTextEl.innerHTML = `🎉 <strong>Поздравляем!</strong> Доставка для вас бесплатна.`;
    } else {
      const diff = freeShippingTarget - subtotal;
      if (shippingTextEl) shippingTextEl.innerHTML = `Добавьте товаров на <strong>${formatPrice(diff)} ₽</strong> для бесплатной доставки!`;
    }
  }

  renderWishlistDrawer() {
    const listEl = document.getElementById('wishlistItemsList');
    if (!listEl) return;

    const wishlistProducts = PRODUCTS.filter(p => this.isInWishlist(p.id));

    if (wishlistProducts.length === 0) {
      listEl.innerHTML = `
        <div class="empty-state">
          <i data-lucide="heart"></i>
          <h4>Список избранного пуст</h4>
          <p>Нажмите на сердечко на карточке товара, чтобы сохранить его здесь.</p>
        </div>
      `;
    } else {
      listEl.innerHTML = wishlistProducts.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" class="cart-item__img">
          <div class="cart-item__details">
            <h4 class="cart-item__title">${item.title}</h4>
            <span class="cart-item__meta">${item.categoryName}</span>
            <span class="cart-item__price">${formatPrice(item.price)} ₽</span>
            <div class="cart-item__bottom" style="margin-top: 10px; gap: 8px;">
              <button class="btn btn--primary btn--sm" onclick="appState.addToCart('${item.id}'); appState.toggleWishlist('${item.id}');">
                <span>В корзину</span>
              </button>
              <button class="btn btn--outline btn--sm" onclick="appState.toggleWishlist('${item.id}')">
                Удалить
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

// Global App Instance
const appState = new StoreState();

// Utility: Format price with spaces
function formatPrice(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// ================= RENDER PRODUCT CARDS =================
function renderProductCard(product) {
  const isWish = appState.isInWishlist(product.id);
  return `
    <div class="product-card" data-category="${product.category}">
      <div class="product-card__image-wrap" onclick="openQuickView('${product.id}')">
        <img src="${product.image}" alt="${product.title}" class="product-card__img" loading="lazy">
        
        <div class="product-card__badges">
          ${product.badge ? `
            <span class="product-badge product-badge--${product.badge}">
              ${product.badgeText}
            </span>
          ` : ''}
          ${product.oldPrice ? `
            <span class="product-badge product-badge--discount">
              -${Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
            </span>
          ` : ''}
        </div>

        <div class="product-card__actions" onclick="event.stopPropagation()">
          <button class="card-action-btn ${isWish ? 'active' : ''}" 
                  data-wishlist="${product.id}" 
                  title="В избранное" 
                  onclick="appState.toggleWishlist('${product.id}')">
            <i data-lucide="heart" ${isWish ? 'style="fill: currentColor;"' : ''}></i>
          </button>
          <button class="card-action-btn" 
                  title="Быстрый просмотр" 
                  onclick="openQuickView('${product.id}')">
            <i data-lucide="eye"></i>
          </button>
        </div>
      </div>

      <div class="product-card__info">
        <span class="product-card__category">${product.categoryName}</span>
        <h3 class="product-card__title" onclick="openQuickView('${product.id}')">${product.title}</h3>
        
        <div class="product-card__price-row">
          <span class="product-card__price">${formatPrice(product.price)} ₽</span>
          ${product.oldPrice ? `<span class="product-card__price--old">${formatPrice(product.oldPrice)} ₽</span>` : ''}
        </div>

        <button class="product-card__btn" id="btn-${product.id}" onclick="handleAddToCartClick('${product.id}', this)">
          <i data-lucide="shopping-bag"></i>
          <span>В корзину</span>
        </button>
      </div>
    </div>
  `;
}

function handleAddToCartClick(productId, btnElement) {
  appState.addToCart(productId);
  btnElement.classList.add('added');
  btnElement.innerHTML = `<i data-lucide="check"></i> <span>Добавлено!</span>`;
  lucide.createIcons();

  setTimeout(() => {
    btnElement.classList.remove('added');
    btnElement.innerHTML = `<i data-lucide="shopping-bag"></i> <span>В корзину</span>`;
    lucide.createIcons();
  }, 1600);
}

function renderCatalog() {
  const hitsGrid = document.getElementById('hitsGrid');
  const newGrid = document.getElementById('newArrivalsGrid');

  if (hitsGrid) {
    let filtered = PRODUCTS.filter(p => p.isHit);
    if (appState.activeFilter === 'clothing') filtered = PRODUCTS.filter(p => p.category === 'clothing');
    if (appState.activeFilter === 'shoes') filtered = PRODUCTS.filter(p => p.category === 'shoes');
    if (appState.activeFilter === 'accessories') filtered = PRODUCTS.filter(p => p.category === 'accessories');
    if (appState.activeFilter === 'sale') filtered = PRODUCTS.filter(p => p.oldPrice !== null);

    hitsGrid.innerHTML = filtered.map(renderProductCard).join('');
  }

  if (newGrid) {
    const newItems = PRODUCTS.filter(p => p.isNew);
    newGrid.innerHTML = newItems.map(renderProductCard).join('');
  }

  lucide.createIcons();
}

// ================= QUICK VIEW MODAL =================
let activeQuickViewProduct = null;
let selectedQuickViewSize = null;

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  activeQuickViewProduct = product;
  selectedQuickViewSize = product.sizes[0];

  const contentEl = document.getElementById('quickViewContent');
  contentEl.innerHTML = `
    <div class="quick-view__gallery">
      <img src="${product.image}" alt="${product.title}" class="quick-view__main-img">
    </div>
    <div class="quick-view__info">
      <span class="quick-view__tag">${product.categoryName}</span>
      <h2 class="quick-view__title">${product.title}</h2>
      
      <div class="quick-view__price-wrap">
        <span class="quick-view__price">${formatPrice(product.price)} ₽</span>
        ${product.oldPrice ? `<span class="product-card__price--old" style="font-size: 1.1rem;">${formatPrice(product.oldPrice)} ₽</span>` : ''}
      </div>

      <p class="quick-view__desc">${product.description}</p>
      <p style="font-size: 0.8rem; color: #555; margin-bottom: 20px;"><strong>Состав:</strong> ${product.composition}</p>

      <div class="size-selector">
        <span class="size-selector__label">Выберите размер:</span>
        <div class="size-options">
          ${product.sizes.map((s, idx) => `
            <div class="size-option ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewSize(this, '${s}')">${s}</div>
          `).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 12px; margin-top: auto;">
        <button class="btn btn--primary btn--lg btn--block" onclick="addFromQuickView()">
          <i data-lucide="shopping-bag"></i>
          <span>Добавить в корзину</span>
        </button>
        <button class="card-action-btn ${appState.isInWishlist(product.id) ? 'active' : ''}" 
                style="width: 52px; height: 52px; border-radius: var(--radius-sm);" 
                onclick="appState.toggleWishlist('${product.id}')">
          <i data-lucide="heart"></i>
        </button>
      </div>
    </div>
  `;

  document.getElementById('quickViewModal').classList.add('active');
  lucide.createIcons();
}

function selectQuickViewSize(el, size) {
  document.querySelectorAll('.size-option').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  selectedQuickViewSize = size;
}

function addFromQuickView() {
  if (!activeQuickViewProduct) return;
  appState.addToCart(activeQuickViewProduct.id, selectedQuickViewSize);
  document.getElementById('quickViewModal').classList.remove('active');
  document.getElementById('cartOverlay').classList.add('active');
}

// ================= LIVE SEARCH MODAL =================
function handleSearch(query) {
  const resultsEl = document.getElementById('searchResults');
  const clean = query.trim().toLowerCase();

  if (!clean) {
    resultsEl.innerHTML = `<p class="search-placeholder">Введите название вещи или категории для быстрого поиска...</p>`;
    return;
  }

  const matches = PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(clean) || 
    p.categoryName.toLowerCase().includes(clean) || 
    p.description.toLowerCase().includes(clean)
  );

  if (matches.length === 0) {
    resultsEl.innerHTML = `<p class="search-placeholder">По запросу <strong>"${query}"</strong> ничего не найдено.</p>`;
    return;
  }

  resultsEl.innerHTML = matches.map(p => `
    <div class="search-item" onclick="openQuickView('${p.id}'); document.getElementById('searchModal').classList.remove('active');">
      <img src="${p.image}" alt="${p.title}" class="search-item__img">
      <div>
        <h4 class="search-item__title">${p.title}</h4>
        <span style="font-size: 0.75rem; color: #888;">${p.categoryName}</span>
      </div>
      <span class="search-item__price">${formatPrice(p.price)} ₽</span>
    </div>
  `).join('');
}

// ================= TOAST SYSTEM =================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="check-circle"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ================= PROMO SALE COUNTDOWN =================
function initCountdown() {
  // Target: 3 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  targetDate.setHours(targetDate.getHours() + 14);

  function update() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const pad = (n) => String(n).padStart(2, '0');

    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minEl = document.getElementById('countMinutes');
    const secEl = document.getElementById('countSeconds');

    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minEl) minEl.textContent = pad(minutes);
    if (secEl) secEl.textContent = pad(seconds);
  }

  update();
  setInterval(update, 1000);
}

// ================= DOM EVENT LISTENERS =================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial renders
  appState.renderUI();
  renderCatalog();
  initCountdown();

  // 2. Drawers Toggle
  const cartOverlay = document.getElementById('cartOverlay');
  const wishlistOverlay = document.getElementById('wishlistOverlay');
  const searchModal = document.getElementById('searchModal');
  const quickViewModal = document.getElementById('quickViewModal');
  const checkoutModal = document.getElementById('checkoutModal');
  const orderSuccessModal = document.getElementById('orderSuccessModal');
  const mobileDrawer = document.getElementById('mobileDrawer');

  document.getElementById('cartTrigger')?.addEventListener('click', () => cartOverlay.classList.add('active'));
  document.getElementById('closeCartBtn')?.addEventListener('click', () => cartOverlay.classList.remove('active'));

  document.getElementById('wishlistTrigger')?.addEventListener('click', () => wishlistOverlay.classList.add('active'));
  document.getElementById('closeWishlistBtn')?.addEventListener('click', () => wishlistOverlay.classList.remove('active'));

  document.getElementById('searchTrigger')?.addEventListener('click', () => {
    searchModal.classList.add('active');
    document.getElementById('searchInput')?.focus();
  });
  document.getElementById('closeSearchModal')?.addEventListener('click', () => searchModal.classList.remove('active'));

  document.getElementById('closeQuickViewModal')?.addEventListener('click', () => quickViewModal.classList.remove('active'));
  document.getElementById('closeCheckoutModal')?.addEventListener('click', () => checkoutModal.classList.remove('active'));
  document.getElementById('closeSuccessModalBtn')?.addEventListener('click', () => orderSuccessModal.classList.remove('active'));

  // Mobile Drawer
  document.getElementById('mobileMenuBtn')?.addEventListener('click', () => mobileDrawer.classList.add('active'));
  document.getElementById('closeMobileDrawer')?.addEventListener('click', () => mobileDrawer.classList.remove('active'));
  document.querySelectorAll('.mobile-nav__link').forEach(l => {
    l.addEventListener('click', () => mobileDrawer.classList.remove('active'));
  });

  // Close when clicking overlay backdrop
  [cartOverlay, wishlistOverlay, searchModal, quickViewModal, checkoutModal, orderSuccessModal].forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [cartOverlay, wishlistOverlay, searchModal, quickViewModal, checkoutModal, orderSuccessModal].forEach(m => m.classList.remove('active'));
    }
    // Ctrl+K for search
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchModal.classList.add('active');
      document.getElementById('searchInput')?.focus();
    }
  });

  // 3. Filter tabs on Catalog
  document.querySelectorAll('#catalogFilterTabs .filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#catalogFilterTabs .filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      appState.activeFilter = tab.getAttribute('data-filter');
      renderCatalog();
    });
  });

  // 4. Category Cards Click Handler
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      appState.activeFilter = cat;
      
      const tab = document.querySelector(`#catalogFilterTabs .filter-tab[data-filter="${cat}"]`);
      if (tab) {
        document.querySelectorAll('#catalogFilterTabs .filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      }

      renderCatalog();
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 5. Promo Code Buttons
  document.getElementById('applyPromoBtn')?.addEventListener('click', () => {
    const input = document.getElementById('cartPromoInput');
    if (input && input.value) {
      appState.applyPromo(input.value);
    }
  });

  document.getElementById('copyPromoBtn')?.addEventListener('click', () => {
    navigator.clipboard.writeText('AUTUMN40');
    appState.applyPromo('AUTUMN40');
    showToast('Промокод AUTUMN40 скопирован и применен!');
  });

  document.getElementById('promoSaleBtn')?.addEventListener('click', () => {
    appState.activeFilter = 'sale';
    const saleTab = document.querySelector('#catalogFilterTabs .filter-tab[data-filter="sale"]');
    if (saleTab) {
      document.querySelectorAll('#catalogFilterTabs .filter-tab').forEach(t => t.classList.remove('active'));
      saleTab.classList.add('active');
    }
    renderCatalog();
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
  });

  // 6. Clear Cart
  document.getElementById('clearCartBtn')?.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите очистить корзину?')) {
      appState.clearCart();
    }
  });

  // 7. Checkout Trigger
  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (appState.cart.length === 0) {
      showToast('Добавьте товары в корзину перед оформлением!');
      return;
    }
    cartOverlay.classList.remove('active');
    document.getElementById('checkoutFinalTotal').textContent = `${formatPrice(appState.getGrandTotal())} ₽`;
    checkoutModal.classList.add('active');
  });

  // 8. Checkout Form Submit
  document.getElementById('checkoutOrderForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const orderNum = `#PATRIK-${Math.floor(10000 + Math.random() * 90000)}`;
    document.getElementById('successOrderNum').textContent = orderNum;

    checkoutModal.classList.remove('active');
    appState.clearCart();
    orderSuccessModal.classList.add('active');
  });

  // 9. Search Input Live Filtering
  const searchInput = document.getElementById('searchInput');
  searchInput?.addEventListener('input', (e) => {
    handleSearch(e.target.value);
  });

  document.querySelectorAll('.search-tag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-query');
      if (searchInput) {
        searchInput.value = q;
        handleSearch(q);
      }
    });
  });

  // 10. Newsletter Subscribe
  document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    showToast(`Спасибо за подписку! Промокод на 10% отправлен на ${email}`);
    document.getElementById('newsletterEmail').value = '';
  });

  // 11. Radio Cards Selection in Checkout
  document.querySelectorAll('.delivery-options .radio-card, .payment-methods .radio-card').forEach(card => {
    card.addEventListener('click', () => {
      const parent = card.parentElement;
      parent.querySelectorAll('.radio-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
});
