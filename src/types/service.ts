import type { LucideIcon } from "lucide-react";

/**
 * Represents a single business service offered by SWIX.
 */
export interface Service {
  id: string;
  title: string;
  description: string;

  /**
   * Lucide icon component.
   * Example:
   * icon: Database
   */
  icon: LucideIcon;
}