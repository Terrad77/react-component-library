import { useState, Fragment } from 'react';
import './SidebarMenu.css';

export interface MenuItem {
  /** Menu item ID */
  id: string;
  /** Menu item label */
  label: string;
  /** Menu item icon */
  icon?: React.ReactNode;
  /** Child menu items */
  children?: MenuItem[];
  /** Link URL (if provided, triggers navigation) */
  href?: string;
  /** Active state */
  active?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Badge or counter */
  badge?: number | string;
}

export interface SidebarMenuProps {
  /** Array of menu items */
  items: MenuItem[];
  /** Collapsed state (mini version) */
  collapsed?: boolean;
  /** Default active item ID */
  defaultActiveId?: string;
  /** Menu item click handler */
  onItemClick?: (item: MenuItem) => void;
  /** Menu title */
  title?: string;
  /** Show dividers between item groups */
  showDividers?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const SidebarMenu = ({
  items,
  collapsed = false,
  defaultActiveId,
  onItemClick,
  title,
  showDividers = true,
  className = '',
}: SidebarMenuProps) => {
  const [activeId, setActiveId] = useState(defaultActiveId);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const handleItemClick = (item: MenuItem, event?: React.MouseEvent) => {
    if (item.disabled) return;

    if (item.href && !item.children) {
      // Handle navigation if href is provided
      return;
    }

    if (item.children && item.children.length > 0) {
      // Toggle submenu expansion
      const newExpanded = new Set(expandedItems);
      if (newExpanded.has(item.id)) {
        newExpanded.delete(item.id);
      } else {
        newExpanded.add(item.id);
      }
      setExpandedItems(newExpanded);

      if (!collapsed) {
        setActiveId(item.id);
      }
    } else {
      setActiveId(item.id);
    }

    onItemClick?.(item);

    if (item.href && event) {
      event.preventDefault();
      // Navigation logic would go here in a real application
      console.log(`Navigating to: ${item.href}`);
    }
  };

  const renderMenuItem = (item: MenuItem, depth = 0, parentId?: string) => {
    const isActive = activeId === item.id;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const uniqueKey = parentId ? `${parentId}-${item.id}` : item.id;

    return (
      <Fragment key={uniqueKey}>
        <li className="sidebar-menu-item">
          <a
            href={item.href || '#'}
            className={`sidebar-menu-link ${isActive ? 'sidebar-menu-link--active' : ''} ${
              item.disabled ? 'sidebar-menu-link--disabled' : ''
            } sidebar-menu-link--depth-${depth}`}
            onClick={e => handleItemClick(item, e)}
            title={collapsed ? item.label : undefined}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.icon && <span className="sidebar-menu-icon">{item.icon}</span>}

            {!collapsed && (
              <>
                <span className="sidebar-menu-label">{item.label}</span>

                {item.badge && <span className="sidebar-menu-badge">{item.badge}</span>}

                {hasChildren && (
                  <span className="sidebar-menu-arrow">
                    <svg
                      className={`sidebar-menu-arrow-icon ${
                        isExpanded ? 'sidebar-menu-arrow-icon--expanded' : ''
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                  </span>
                )}
              </>
            )}
          </a>
        </li>

        {hasChildren && isExpanded && !collapsed && (
          <ul className="sidebar-submenu" key={`submenu-${uniqueKey}`}>
            {item.children!.map(child => renderMenuItem(child, depth + 1, uniqueKey))}
          </ul>
        )}
      </Fragment>
    );
  };

  return (
    <nav
      className={`sidebar-menu ${collapsed ? 'sidebar-menu--collapsed' : ''} ${className}`}
      aria-label="Main navigation"
    >
      {title && !collapsed && (
        <div className="sidebar-menu-header">
          <h2 className="sidebar-menu-title">{title}</h2>
        </div>
      )}

      <ul className="sidebar-menu-list">
        {items.map((item, index) => (
          <Fragment key={item.id}>
            {renderMenuItem(item)}
            {showDividers && index < items.length - 1 && (
              <li className="sidebar-menu-divider" key={`divider-${item.id}-${index}`} />
            )}
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};
