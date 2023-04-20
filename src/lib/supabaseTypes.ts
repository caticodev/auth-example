export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null
          id: string
          projects: string[] | null
          streak: number | null
          tags: string[] | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          id: string
          projects?: string[] | null
          streak?: number | null
          tags?: string[] | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          id?: string
          projects?: string[] | null
          streak?: number | null
          tags?: string[] | null
          updated_at?: string | null
          username?: string | null
        }
      }
      tasks: {
        Row: {
          active: boolean | null
          created_at: string
          done: boolean | null
          due_to: string
          estimated_time: number | null
          id: number
          name: string | null
          note: string | null
          priority: number | null
          time_tracked: number | null
          user_id: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          done?: boolean | null
          due_to?: string
          estimated_time?: number | null
          id?: number
          name?: string | null
          note?: string | null
          priority?: number | null
          time_tracked?: number | null
          user_id: string
        }
        Update: {
          active?: boolean | null
          created_at?: string
          done?: boolean | null
          due_to?: string
          estimated_time?: number | null
          id?: number
          name?: string | null
          note?: string | null
          priority?: number | null
          time_tracked?: number | null
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
