export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      absences: {
        Row: {
          id: number
          lesson_id: number
          nr: number
          student_id: number
        }
        Insert: {
          id?: number
          lesson_id: number
          nr: number
          student_id: number
        }
        Update: {
          id?: number
          lesson_id?: number
          nr?: number
          student_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "absences_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "absences_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "elevi"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "absences_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_best_grades"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "absences_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_student_performance"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "absences_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_students_best"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "absences_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_students_best_grades"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "absences_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_students_failed"
            referencedColumns: ["student_id"]
          },
        ]
      }
      behavior: {
        Row: {
          grade: number
          id: number
          student_id: number
        }
        Insert: {
          grade: number
          id?: number
          student_id: number
        }
        Update: {
          grade?: number
          id?: number
          student_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "behavior_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "elevi"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "behavior_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_best_grades"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "behavior_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_student_performance"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "behavior_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_students_best"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "behavior_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_students_best_grades"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "behavior_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_students_failed"
            referencedColumns: ["student_id"]
          },
        ]
      }
      elevi: {
        Row: {
          adresa: string
          data_nasterii: string
          id: number
          id_grupa: number
          nume: string
        }
        Insert: {
          adresa: string
          data_nasterii: string
          id?: number
          id_grupa: number
          nume: string
        }
        Update: {
          adresa?: string
          data_nasterii?: string
          id?: number
          id_grupa?: number
          nume?: string
        }
        Relationships: [
          {
            foreignKeyName: "elevi_id_grupa_fkey"
            columns: ["id_grupa"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "elevi_id_grupa_fkey"
            columns: ["id_grupa"]
            isOneToOne: false
            referencedRelation: "v_group_average"
            referencedColumns: ["group_id"]
          },
        ]
      }
      grades: {
        Row: {
          grade: number
          id: number
          lesson_id: number
          student_id: number
        }
        Insert: {
          grade: number
          id?: number
          lesson_id: number
          student_id: number
        }
        Update: {
          grade?: number
          id?: number
          lesson_id?: number
          student_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "grades_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grades_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "elevi"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grades_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_best_grades"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "grades_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_student_performance"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "grades_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_students_best"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "grades_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_students_best_grades"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "grades_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "v_students_failed"
            referencedColumns: ["student_id"]
          },
        ]
      }
      groups: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      lessons: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      prompts: {
        Row: {
          created_at: string | null
          id: number
          key: string
          prompt: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          key: string
          prompt: string
        }
        Update: {
          created_at?: string | null
          id?: number
          key?: string
          prompt?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          id: number
          name: string
          parola: string
        }
        Insert: {
          id?: number
          name: string
          parola: string
        }
        Update: {
          id?: number
          name?: string
          parola?: string
        }
        Relationships: []
      }
    }
    Views: {
      v_best_grades: {
        Row: {
          overall_avg_grade: number | null
          student_id: number | null
          student_name: string | null
          total_absences: number | null
        }
        Relationships: []
      }
      v_group_average: {
        Row: {
          avg_grade: number | null
          group_id: number | null
          group_name: string | null
        }
        Relationships: []
      }
      v_student_performance: {
        Row: {
          overall_avg_grade: number | null
          student_id: number | null
          student_name: string | null
          total_absences: number | null
        }
        Relationships: []
      }
      v_students_best: {
        Row: {
          overall_avg_grade: number | null
          student_id: number | null
          student_name: string | null
          total_absences: number | null
        }
        Relationships: []
      }
      v_students_best_grades: {
        Row: {
          overall_avg_grade: number | null
          student_id: number | null
          student_name: string | null
          total_absences: number | null
        }
        Relationships: []
      }
      v_students_failed: {
        Row: {
          overall_avg_grade: number | null
          student_id: number | null
          student_name: string | null
          total_absences: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_prompt: {
        Args: { p_key: string }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
